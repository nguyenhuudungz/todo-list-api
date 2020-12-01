export type Place = 'home' | 'work' | { custom: string };

export class Todo {
  id: string;
  title: string;
  isFinish: boolean;
  place?: Place;

  constructor(id: string, title: string, isFinish: boolean, place?: Place) {
    Object.assign(this, { id, title, isFinish, place });
  }
}
