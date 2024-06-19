import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PreparationService } from './preparation.service';
import { PreparationController } from './preparation.controller';
import { Preparation } from './preparation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Preparation])],
  controllers: [PreparationController],
  providers: [PreparationService],
})
export class PreparationModule {}
