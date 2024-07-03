// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PreparacionModule } from './/preparacion/preparacion.module';
import { Preparacion } from './preparacion/preparacion.entity';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { WebsocketGateway } from './preparacion/preparacion.gateway';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Preparacion],
      synchronize: true,
    }),
    PreparacionModule,
  ],
  controllers: [AppController],
  providers: [AppService, WebsocketGateway],
})
export class AppModule {}
