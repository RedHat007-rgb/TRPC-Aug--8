import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [DbModule, TodoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
