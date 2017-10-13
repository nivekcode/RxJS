import {Component, Input, OnInit} from '@angular/core'
import {Observable} from 'rxjs/Observable'
import {ToDo} from '../../model/todo.model'
import 'rxjs/add/observable/combineLatest'
import 'rxjs/add/observable/merge'
import 'rxjs/add/operator/startWith'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import {Subject} from 'rxjs/Subject'
import {TODO_ACTION} from '../../model/todo.actions';
import {Payload} from "app/todos/model/payload.model";

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.html'
})
export class TodoListComponent implements OnInit {

    @Input('newTodos') newTodos$: Observable<Payload>
    todo$: Observable<Array<ToDo>>
    remove$ = new Subject<Payload>()

    constructor() {
    }

    ngOnInit(): void {
        this.todo$ = Observable.merge(this.newTodos$, this.remove$.asObservable())
            .scan((acc: Array<ToDo>, payload: Payload) => {
                switch (payload.action) {
                    case TODO_ACTION.ADD:
                        return [...acc, payload.data]
                    case TODO_ACTION.REMOVE:
                        return acc.filter(todo => todo !== payload.data)
                    default:
                        return acc
                }
            }, [])
    }
}