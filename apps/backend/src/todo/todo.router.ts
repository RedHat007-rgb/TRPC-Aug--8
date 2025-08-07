import { Input, Mutation, Router } from 'nestjs-trpc';
import { TodoService } from './todo.service';
import { TodoType, zTodo } from './todo.schema';

@Router()
export class TodoRouter {
  constructor(private readonly todoService: TodoService) {}
  @Mutation({
    input: zTodo,
  })
  createTodo(@Input() input: TodoType): Promise<TodoType> {
    return this.todoService.createTodo(input);
  }
}
