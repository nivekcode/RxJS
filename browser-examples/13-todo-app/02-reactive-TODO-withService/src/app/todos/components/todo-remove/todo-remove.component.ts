import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/mapTo'
import {ToDo} from '../../model/todo.model';
import {TodoService} from '../../model/todo.service';

@Component({
    selector: 'todo-remove',
    templateUrl: './todo-remove.html'
})
export class TodoRemoveComponent implements OnInit {

    @Input() todo: ToDo
    @ViewChild('removeButton') removeButton

    constructor(private todoService: TodoService) {
    }

    ngOnInit(): void {
        Observable.fromEvent(this.removeButton.nativeElement, 'click')
            .mapTo(this.todo)
            .subscribe(() => this.todoService.removeTodo(this.todo))
    }
}