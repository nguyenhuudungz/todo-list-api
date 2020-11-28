import { Module } from '@nestjs/common';
import { AppController, TodoListController } from './app.controller';
import { AppService, TodoListService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, TodoListController],
  providers: [AppService, TodoListService],
})
export class AppModule {}
