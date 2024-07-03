// src/websocket.gateway.ts
import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { PreparacionService } from './preparacion.service';
import { CreatePreparacionDto } from './dto/create-preparacion.dto';
import { UpdatePreparacionDto } from './dto/update-preparacion.dto';

interface User {
  id: string;
  isActive: boolean;
  connections: Socket[];
}

@WebSocketGateway()
export class WebsocketGateway {
  @WebSocketServer()
  server: Server;

  private users: { [key: string]: User } = {
    user1: { id: 'user1', isActive: true, connections: [] },
    user2: { id: 'user2', isActive: true, connections: [] },
    user3: { id: 'user3', isActive: true, connections: [] },
  };
  wss: any;

  constructor(private readonly preparacionService: PreparacionService) {}

  handleConnection(client: Socket) {
    let userId = client.handshake.headers['authorization'];

    if (Array.isArray(userId)) {
      userId = userId[0];
    }

    if (
      !userId ||
      typeof userId !== 'string' ||
      !this.users[userId] ||
      !this.users[userId].isActive
    ) {
      console.log('Desconectando cliente: usuario inválido o inactivo');
      client.disconnect();
      return;
    }

    const user = this.users[userId];

    // Desconectar las conexiones existentes del usuario
    user.connections.forEach((conn) => conn.disconnect());

    user.connections = [client]; // Solo mantener la conexión actual

    console.log('Cliente conectado:', userId);
  }

  handleDisconnect(client: Socket) {
    let userId = client.handshake.headers['authorization'];

    if (Array.isArray(userId)) {
      userId = userId[0];
    }

    if (userId && typeof userId === 'string' && this.users[userId]) {
      const user = this.users[userId];
      user.connections = user.connections.filter(
        (conn) => conn.id !== client.id,
      );

      if (user.connections.length === 0) {
        console.log('Cliente desconectado:', userId);
      }
    }
  }

  @SubscribeMessage('toggle-user')
  toggleUser(@MessageBody() data: { userId: string; isActive: boolean }) {
    const { userId, isActive } = data;

    if (this.users[userId]) {
      this.users[userId].isActive = isActive;
      console.log(`Usuario ${userId} ${isActive ? 'activado' : 'desactivado'}`);
    } else {
      console.log(`Usuario ${userId} no encontrado`);
    }
  }

  @SubscribeMessage('agregar-transaccion')
  async handleAgregarTransaccion(
    @MessageBody() createPreparacionDto: CreatePreparacionDto,
    @ConnectedSocket() client: Socket,
  ) {
    try {
      const nuevaPreparacion =
        await this.preparacionService.create(createPreparacionDto);
      this.wss.emit('transaccion-agregada', nuevaPreparacion);
    } catch (error) {
      client.emit('error', error.message);
    }
  }

  @SubscribeMessage('actualizar-transaccion')
  async handleActualizarTransaccion(
    @MessageBody()
    data: { id: number; updatePreparacionDto: UpdatePreparacionDto },
    @ConnectedSocket() client: Socket,
  ) {
    try {
      const { id, updatePreparacionDto } = data;
      const preparacionActualizada = await this.preparacionService.update(
        id,
        updatePreparacionDto,
      );
      this.wss.emit('transaccion-actualizada', preparacionActualizada);
    } catch (error) {
      client.emit('error', error.message);
    }
  }

  @SubscribeMessage('consultar-activos')
  async handleConsultarActivos(@ConnectedSocket() client: Socket) {
    const preparaciones = await this.preparacionService.findAll();
    client.emit('activos-consultados', preparaciones);
  }
}
