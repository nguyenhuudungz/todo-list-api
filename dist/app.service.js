'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoListService = exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path = require("path");
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
};
AppService = __decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;
let TodoListService = class TodoListService {
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
        data.push({ id: Math.random(), title });
        fs.writeFileSync(path.resolve(__dirname, 'data.json'), JSON.stringify(data));
    }
    deleteItemById(id) {
        const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'data.json')).toString());
        const filteredData = data.filter((item) => item.id != id);
        fs.writeFileSync(path.resolve(__dirname, 'data.json'), JSON.stringify(filteredData));
    }
};
TodoListService = __decorate([
    common_1.Injectable()
], TodoListService);
exports.TodoListService = TodoListService;
//# sourceMappingURL=app.service.js.map