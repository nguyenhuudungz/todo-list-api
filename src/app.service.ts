'use strict';

import { Injectable } from '@nestjs/common';
import { Place, Todo } from './types';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

// My Code Here

@Injectable()
export class TodoListService {
  data: Todo[] = [
    {
      id: '0.42045283354554064',
      title: 'Mua sữa ở VinMart',
      isFinish: false,
    },
    {
      id: '0.09734088843234234',
      title: 'Làm bài tập Todo List',
      isFinish: false,
    },
    {
      id: '0.5582548368846094',
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      isFinish: false,
    },
  ];

  getTodoList(): Todo[] {
    return this.data;
  }
  getItemById(id: string): Todo {
    return this.data.find(item => item.id === id);
  }
  createNewItem(title: string, place: Place): Todo {
    const newItem: Todo = new Todo(Math.random().toString(), title, false, place);
    this.data.push(newItem);
    return newItem;
  }
  toogleFinishItemById(id: string) {
    this.data.map(item => {
      if (item.id === id) {
        item.isFinish = !item.isFinish;
      }
      return item;
    });
  }
  deleteItemById(id: string) {
    const idx = this.data.findIndex(item => item.id === id);
    this.data.splice(idx, 1);
  }
}
