import {Component, OnInit} from '@angular/core'
import 'rxjs/add/observable/combineLatest'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/startWith'
import {Observable} from 'rxjs/Observable'
import {ToDo} from '../../model/todo.model'
import {TodoService} from '../../model/todo.service';

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.html'
})
export class TodoListComponent implements OnInit {

    public todo$: Observable<Array<ToDo>>

    constructor(private todoService: TodoService) {
    }

    ngOnInit(): void {
        this.todo$ = this.todoService.getTodos()
    }

}