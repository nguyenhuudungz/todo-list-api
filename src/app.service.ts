'use strict';

import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { Place, Todo } from './types';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

// My Code Here

const data: Todo[] = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'data.json')).toString());

@Injectable()
export class TodoListService {
  getTodoList(): Todo[] {
    return data;
  }
  getItemById(id: string): Todo {
    return data.find((item) => item.id === id);
  }
  createNewItem(title: string, place: Place): Todo {
    const newItem: Todo = new Todo(Math.random().toString(), title, false, place);
    data.push(newItem);
    fs.writeFileSync(path.resolve(__dirname, 'data.json'), JSON.stringify(data));
    return newItem;
  }
  toogleFinishItemById(id: string) {
    data.map((item) => {
      if (item.id === id) {
        item.isFinish = !item.isFinish;
      }
      return item;
    });
    fs.writeFileSync(path.resolve(__dirname, 'data.json'), JSON.stringify(data));
  }
  deleteItemById(id: string) {
    const filteredData: Todo[] = data.filter((item) => item.id !== id);
    fs.writeFileSync(path.resolve(__dirname, 'data.json'), JSON.stringify(filteredData));
  }
}
