import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from './schemas/todo.schema';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  constructor(@InjectModel('Todos') private readonly todoModel: Model<Todo>) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const createdTodo = new this.todoModel(createTodoDto);
    return await createdTodo.save();
  }

  async findAll(): Promise<Todo[]> {
    return await this.todoModel.find().exec();
  }

  async findById(id: string): Promise<Todo> {
    return await this.todoModel.findById(id).exec();
  }

  async findByTitle(title: string): Promise<Todo[]> {
    return await this.todoModel.find({ title: new RegExp(title, 'i') });
  }

  async delete(id: string): Promise<Todo> {
    return await this.todoModel.findByIdAndDelete(id);
  }

  async update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    return await this.todoModel.findByIdAndUpdate(id, updateTodoDto);
  }
}
