import {Component, OnInit, Self, ViewChild} from '@angular/core'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/observable/empty'
import 'rxjs/add/operator/scan'
import {TodoService} from '../../model/todo.service';

@Component({
    selector: 'todo-input',
    templateUrl: './todo-input.html'
})
export class TodoInputComponent implements OnInit {

    @ViewChild('addTodo') addTodo
    @ViewChild('todoInput') todoInput

    constructor(private todoService: TodoService) {
    }

    ngOnInit(): void {
        Observable
            .fromEvent(this.addTodo.nativeElement, 'click')
            .subscribe(() => this.todoService.addTodo(this.todoInput.nativeElement.value))
    }
}