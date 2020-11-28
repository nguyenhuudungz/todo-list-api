import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { AppService, TodoListService } from './app.service';

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
  getTodoList() {
    return this.todoListService.getTodoList();
  }

  @Post()
  createNewItem(@Body() payload) {
    const { title } = payload;
    this.todoListService.createNewItem(title);
  }

  @Get('/:id')
  getItemById(@Param('id') id) {
    return this.todoListService.getItemById(id);
  }

  @Delete('/:id')
  deleteItemById(@Param('id') id) {
    return this.todoListService.deleteItemById(id);
  }
}
