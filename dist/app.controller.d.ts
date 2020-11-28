import { AppService, TodoListService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
}
export declare class TodoListController {
    private readonly todoListService;
    constructor(todoListService: TodoListService);
    getTodoList(): any;
    createNewItem(payload: any): void;
    getItemById(id: any): any;
    deleteItemById(id: any): void;
}
