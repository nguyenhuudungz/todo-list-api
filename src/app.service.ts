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

@Injectable()
export class TodoListService {
  getTodoList(): Todo[] {
    const data: Todo[] = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'data.json')).toString());
    return data;
  }
  getItemById(id: string): Todo {
    const data: Todo[] = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'data.json')).toString());
    return data.find((item) => item.id === id);
  }
  createNewItem(title: string, place: Place): string {
    const data: Todo[] = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'data.json')).toString());
    const newItemId = Math.random().toString();
    const newItem: Todo = new Todo(newItemId, title, false, place);
    data.push(newItem);
    fs.writeFileSync(path.resolve(__dirname, 'data.json'), JSON.stringify(data));
    return newItemId;
  }
  toogleFinishItemById(id: string) {
    const data: Todo[] = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'data.json')).toString());
    data.map((item) => {
      if (item.id === id) {
        item.isFinish = !item.isFinish;
      }
      return item;
    });
    fs.writeFileSync(path.resolve(__dirname, 'data.json'), JSON.stringify(data));
  }
  deleteItemById(id: string) {
    const data: Todo[] = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'data.json')).toString());
    const filteredData: Todo[] = data.filter((item) => item.id !== id);
    fs.writeFileSync(path.resolve(__dirname, 'data.json'), JSON.stringify(filteredData));
  }
}
