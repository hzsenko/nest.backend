import {Controller, Get, Post, Body, Param, Put, Delete, Query} from '@nestjs/common';
import {TodosService} from './todos.service';
import {CreateTodoDto} from './dto/create-todo.dto';
import {Todo} from './schemas/todo.schema';
import {UpdateTodoDto} from './dto/update-todo.dto';
import {ApiQuery} from '@nestjs/swagger';

@Controller()
export class TodosController {

  constructor(private todoService: TodosService) {}

  @Get('todos')
  @ApiQuery({
    name: 'title',
    required: false
  })
  getAll(@Query('title') title: string): any {
    if (!title) {
      return this.todoService.findAll();
    }
    return this.todoService.findByTitle(title);
  }

  @Get('todo/:id')
  getById(@Param('id') id: string): Promise<Todo> {
    return this.todoService.findById(id);
  }

  @Post('todo')
  create(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoService.create(createTodoDto);
  }

  @Put('todo/:id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto): Promise<Todo> {
    return this.todoService.update(id, updateTodoDto);
  }

  @Delete('todo/:id')
  delete(@Param('id') id: string): Promise<Todo> {
    return this.todoService.delete(id);
  }

}
