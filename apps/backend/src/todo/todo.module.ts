import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { TodoRouter } from './todo.router';
import { TodoService } from './todo.service';
import { TRPCModule } from 'nestjs-trpc';

@Module({
  imports: [
    DbModule,
    TRPCModule.forRoot({
      autoSchemaFile: '../../packages/trpc-config/src/server',
    }),
  ],
  providers: [TodoRouter, TodoService],
})
export class TodoModule {}
