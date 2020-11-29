export class Todo {
  id: string;
  title: string;
  isFinish: boolean;

  constructor(id: string, title: string, isFinish: boolean) {
    this.id = id;
    this.title = title;
    this.isFinish = isFinish;
  }
}
