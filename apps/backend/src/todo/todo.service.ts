import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from 'src/db/db.todo';
import { TodoType } from './todo.schema';

@Injectable()
export class TodoService {
  constructor(@InjectModel('Todo') private todoModel: Model<Todo>) {}
  async createTodo(input: TodoType): Promise<TodoType> {
    const { title, status } = input;
    console.log(`${JSON.stringify(input)} from service`);
    try {
      if (!title || !status) {
        throw new BadRequestException('input validation failed');
      }
      const data = await this.todoModel.create(input);
      if (!data) {
        throw new InternalServerErrorException('Failed to create Todo');
      }
      const result = {
        id: `${data._id as string}`,
        title: data.title,
        description: data.description,
        status: data.status,
      };
      return result;
    } catch (error) {
      throw new Error(`error while creating Todo: ${error}`);
    }
  }
}
