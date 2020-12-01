import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { AppService, TodoListService } from './app.service';
import { Todo } from './types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('todo-list')
export class TodoListController {
  constructor(private readonly todoListService: TodoListService) {}

  @Get()
  getTodoList(): Todo[] {
    return this.todoListService.getTodoList();
  }

  @Post()
  createNewItem(@Body() payload: Todo) {
    const { title, place } = payload;
    const newItemId = this.todoListService.createNewItem(title, place);
    return {
      id: newItemId,
    };
  }

  @Get('/:id')
  getItemById(@Param('id') id: string): Todo {
    return this.todoListService.getItemById(id);
  }

  @Put('/:id')
  toogleFinishItemById(@Param('id') id: string) {
    return this.todoListService.toogleFinishItemById(id);
  }

  @Delete('/:id')
  deleteItemById(@Param('id') id: string) {
    return this.todoListService.deleteItemById(id);
  }
}
