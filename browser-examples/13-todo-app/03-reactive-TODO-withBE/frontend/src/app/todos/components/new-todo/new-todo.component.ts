import {Component, EventEmitter, Output} from '@angular/core';
import {ToDo} from '../../model/todo.model';

@Component({
  selector: 'td-new-todo',
  templateUrl: './new-todo.component.html',
})
export class NewTodoComponent {

  private newToDoTitle = '';
  @Output() onAddToDo = new EventEmitter<ToDo>();

  addToDo(rating): void {
    this.onAddToDo.emit(new ToDo(this.newToDoTitle));
    this.newToDoTitle = '';
  }

}
