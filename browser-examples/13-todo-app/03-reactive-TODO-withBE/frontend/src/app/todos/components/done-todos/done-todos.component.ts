import {Component, OnInit} from '@angular/core';
import {ToDo} from '../../model/todo.model';
import {ToDoService} from '../../model/todo.service';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Component({
    selector: 'td-done-todos',
    templateUrl: './done-todos.component.html',
    providers: [ToDoService]
})
export class DoneTodosComponent implements OnInit {

    doneToDos$: Observable<Array<ToDo>>;
    removeTodo$ = new Subject<ToDo>()

    constructor(private todoService: ToDoService) {
    }

    ngOnInit() {
        this.doneToDos$ = this.removeTodo$
            .startWith(null)
            .switchMap(e => {
                if (!e) {
                    return Observable.of(1)
                }
                return this.todoService.deleteTodo(e)
            })
            .switchMap(() => this.todoService.getTodos())
            .map((todos: any) => todos.filter(t => t.completed))
    }
}
