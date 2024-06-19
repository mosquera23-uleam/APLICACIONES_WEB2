import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CookModule } from './cook/cook.module';
import { RecipeModule } from './recipe/recipe.module';
import { PreparationModule } from './preparation/preparation.module';
import { Cook } from './cook/cook.entity';
import { Recipe } from './recipe/recipe.entity';
import { Preparation } from './preparation/preparation.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Cook, Recipe, Preparation],
      synchronize: true,
    }),
    CookModule,
    RecipeModule,
    PreparationModule,
  ],
})
export class AppModule {}
