import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from 'src/db/db.todo';
import { TodoType } from './todo.schema';
import { UpdateTodo } from '@repo/shared';

@Injectable()
export class TodoService {
  constructor(@InjectModel('Todo') private todoModel: Model<Todo>) {}
  async createTodo(input: TodoType): Promise<TodoType> {
    console.log(`${JSON.stringify(input)} from service`);
    try {
      const { title, status } = input;
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
      console.log(result);
      return result;
    } catch (error) {
      throw new Error(`error while creating Todo: ${error}`);
    }
  }

  async getAllTodo(): Promise<TodoType[]> {
    try {
      const data = await this.todoModel.find();
      if (!data) {
        throw new InternalServerErrorException(
          'Failed to get todos from db...',
        );
      }
      const result = data.map((todo) => ({
        id: `${todo._id as string}`,
        title: todo.title,
        description: todo.description ? todo.description : 'no description',
        status: todo.status,
      }));
      return result;
    } catch (error) {
      throw new Error(`Error in ${error}`);
    }
  }
  async updateTodo(input: TodoType): Promise<TodoType> {
    try {
      // const { id, title, description, status } = input;
      const { id } = input;
      const todo = await this.todoModel.findById(id);
      if (!todo) {
        throw new NotFoundException('No Todos found');
      }
      const todoToUpdate = {
        title: input.title === todo.title ? todo.title : input?.title,
        description:
          input.description === todo.description
            ? todo.description
            : input?.description,
        status:
          input.status?.toString() === todo.status.toString()
            ? todo.status
            : input.status,
      };
      const data = await this.todoModel.findByIdAndUpdate(id, todoToUpdate);
      if (!data) {
        throw new InternalServerErrorException('Failed to update todos');
      }
      const updatedTodo = {
        id: `${data._id as string}`,
        title: data.title,
        description: data.description,
        status: data.status,
      };
      return updatedTodo;
    } catch {
      throw new Error('failed to updated Todo');
    }
  }
}
