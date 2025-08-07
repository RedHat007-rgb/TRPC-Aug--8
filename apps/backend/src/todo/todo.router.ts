import { Input, Mutation, Query, Router } from 'nestjs-trpc';
import { TodoService } from './todo.service';
import { TodoType, zcreateTodo, zTodo, zUpdateTodo } from './todo.schema';
import { CreateTodo } from '@repo/shared';
import z from 'zod';

@Router()
export class TodoRouter {
  constructor(private readonly todoService: TodoService) {}
  @Mutation({
    input: zcreateTodo,
  })
  createTodo(@Input() input: CreateTodo): Promise<TodoType> {
    return this.todoService.createTodo(input);
  }
  @Query({ output: z.array(zTodo) })
  getAllTodo(): Promise<TodoType[]> {
    return this.todoService.getAllTodo();
  }

  @Mutation({ input: zUpdateTodo, output: zUpdateTodo })
  updateTodo(@Input() updateTodo: TodoType): Promise<TodoType> {
    return this.todoService.updateTodo(updateTodo);
  }
}
