'use strict';

import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

// My Code Here

@Injectable()
export class TodoListService {
  getTodoList() {
    const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'data.json')).toString());
    return data;
  }
  getItemById(id) {
    const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'data.json')).toString());
    return data.find((item) => item.id == id);
  }
  createNewItem(title) {
    const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'data.json')).toString());
    data.push({ id: Math.random(), title, isFinish: false });
    fs.writeFileSync(path.resolve(__dirname, 'data.json'), JSON.stringify(data));
  }
  toogleFinishItemById(id) {
    const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'data.json')).toString());
    data.map((item) => {
      if (item.id == id) {
        item.isFinish = !item.isFinish;
      }
      return item;
    });
    fs.writeFileSync(path.resolve(__dirname, 'data.json'), JSON.stringify(data));
  }
  deleteItemById(id) {
    const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'data.json')).toString());
    const filteredData = data.filter((item) => item.id != id);
    fs.writeFileSync(path.resolve(__dirname, 'data.json'), JSON.stringify(filteredData));
  }
}
