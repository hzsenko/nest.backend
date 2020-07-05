import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Todo} from './schemas/todo.schema';
import {CreateTodoDto} from './dto/create-todo.dto';
import {UpdateTodoDto} from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  constructor(@InjectModel('Todos') private readonly todoModel: Model<Todo>) {
  }

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    return await new this.todoModel(createTodoDto).save();
  }

  async findAll(): Promise<Todo[]> {
    return await this.todoModel.find().exec();
  }

  async findById(id: string): Promise<Todo> {
    return await this.todoModel.findById(id).exec();
  }

  // async findByTitle(title: string): Promise<Todo[]> {
  // }

  async delete(id: string): Promise<any> {
    return await this.todoModel.findByIdAndDelete(id);
  }

  async update(id: string, updateTodoDto: UpdateTodoDto): Promise<any> {
    return await this.todoModel.findByIdAndUpdate(id, updateTodoDto)
  }
}
