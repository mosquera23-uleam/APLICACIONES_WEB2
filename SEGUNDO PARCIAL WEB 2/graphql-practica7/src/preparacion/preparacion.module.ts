import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PreparacionService } from './preparacion.service';
import { PreparacionResolver } from './preparacion.resolver';
import { Preparacion } from './entities/preparacion.entity';
import { Cocinero } from '../cocinero/entities/cocinero.entity';
import { Receta } from '../receta/entities/receta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Preparacion, Cocinero, Receta])],
  providers: [PreparacionResolver, PreparacionService],
})
export class PreparacionModule {}
