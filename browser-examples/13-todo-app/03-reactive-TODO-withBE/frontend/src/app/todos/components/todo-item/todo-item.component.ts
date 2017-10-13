import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToDo} from '../../model/todo.model';

@Component({
  selector: 'td-todo-item',
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent {

  @Input() todo: ToDo;
  @Output() onRemoveToDo = new EventEmitter<ToDo>();

  removeToDo() {
    this.onRemoveToDo.emit(this.todo);
  }

}
