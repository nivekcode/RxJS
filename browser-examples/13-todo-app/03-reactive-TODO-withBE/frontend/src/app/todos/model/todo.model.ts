export class ToDo {
  id: string;
  title: String;
  completed: boolean;

  constructor(title: String = '') {
    this.completed = false;
    this.title = title.trim();
  }
}
