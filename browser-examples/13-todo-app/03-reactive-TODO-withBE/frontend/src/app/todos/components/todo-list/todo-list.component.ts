import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToDo} from '../../model/todo.model';

@Component({
  selector: 'td-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent {


  @Input() todos: Array<ToDo>;
  @Output() onRemoveToDo = new EventEmitter<ToDo>();

  removeToDo(todo) {
    this.onRemoveToDo.emit(todo);
  }
}
