import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { todoSchema } from './db.todo';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Todo',
        schema: todoSchema,
      },
    ]),
    MongooseModule.forFeature(),
  ],
})
export class DbModule {}
