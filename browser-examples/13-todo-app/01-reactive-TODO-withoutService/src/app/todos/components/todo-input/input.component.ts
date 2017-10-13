import {Component, OnInit, Self, ViewChild} from '@angular/core'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/observable/empty'
import 'rxjs/add/operator/scan'
import {ToDo} from '../../model/todo.model';
import {Subject} from 'rxjs/Subject';
import {TODO_ACTION} from '../../model/todo.actions';
import {Payload} from '../../model/payload.model';

@Component({
    selector: 'todo-input',
    templateUrl: './todo-input.html'
})
export class TodoInputComponent implements OnInit {

    @ViewChild('addTodo') addTodo
    @ViewChild('todoInput') todoInput
    private todo$ = new Subject<Payload>()

    ngOnInit(): void {
        Observable.fromEvent(this.addTodo.nativeElement, 'click')
            .map(click => ({action: TODO_ACTION.ADD, data: new ToDo(this.todoInput.nativeElement.value)}))
            .subscribe(this.todo$)
    }

    public getTodoStream(): Observable<any> {
        return this.todo$.asObservable()
    }

}