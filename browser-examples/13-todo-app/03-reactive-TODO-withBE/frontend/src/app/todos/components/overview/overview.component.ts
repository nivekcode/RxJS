import {Component, OnInit} from '@angular/core';
import {ToDo} from '../../model/todo.model';
import {ToDoService} from '../../model/todo.service';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/startWith'
import 'rxjs/add/operator/do'
import 'rxjs/add/observable/merge'
import 'rxjs/add/observable/empty'
import 'rxjs/add/observable/of'

enum ACTIONS {
    ADD,
    COMPLETE,
    LOAD
}

@Component({
    templateUrl: './overview.component.html',
    providers: [ToDoService]
})
export class OverviewComponent implements OnInit {

    todos$: Observable<Array<ToDo>>
    doneToDosLength: number

    add$ = new Subject()
    complete$ = new Subject()

    constructor(private todoService: ToDoService) {
    }

    ngOnInit() {
        this.todos$ = Observable.merge(
            this.add$.map(e => ({action: ACTIONS.ADD, data: e})),
            this.complete$.map(e => ({action: ACTIONS.COMPLETE, data: e}))
        )
            .startWith({action: ACTIONS.LOAD})
            .switchMap((e: any) => {
                    switch (e.action) {
                        case ACTIONS.ADD:
                            return this.todoService.saveTodo(e.data)
                        case ACTIONS.COMPLETE:
                            return this.todoService.updateTodo(e.data)
                        default:
                            return Observable.of(1)
                    }
                }
            )
            .switchMap(() => this.todoService.getTodos())
            .map(todos => todos.filter(t => !t.completed))
            .do(todos => this.doneToDosLength = todos.length)
    }
}
