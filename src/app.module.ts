import * as path from 'path';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { RestaurantModule } from './restaurant/restaurant.module';

import databaseConfig from './database/database.config';

const NODE_ENV = process.env.NODE_ENV || 'development';
const envFilePath = path.resolve(__dirname, '..', `.env.${NODE_ENV}`);

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath,
      load: [databaseConfig],
      isGlobal: true,
    }),
    DatabaseModule,
    RestaurantModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
