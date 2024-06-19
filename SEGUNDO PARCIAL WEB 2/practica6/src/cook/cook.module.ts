import { Module } from '@nestjs/common';
import { CookService } from './cook.service';
import { CookController } from './cook.controller';

@Module({
  providers: [CookService],
  controllers: [CookController]
})
export class CookModule {}
