import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { todoSchema } from './db.todo';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Todo',
        schema: todoSchema,
      },
    ]),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URL') ?? '',
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [MongooseModule],
})
export class DbModule {}
