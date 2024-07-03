import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PreparacionService } from '../preparacion/preparacion.service';
import { PreparacionController } from './preparacion.controller';
import { Preparacion } from '../preparacion/preparacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Preparacion])],
  providers: [PreparacionService],
  controllers: [PreparacionController],
  exports: [PreparacionService],
})
export class PreparacionModule {}
