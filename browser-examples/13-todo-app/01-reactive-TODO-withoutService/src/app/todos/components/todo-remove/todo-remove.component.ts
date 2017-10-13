import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/mapTo'
import {ToDo} from '../../model/todo.model';
import {TODO_ACTION} from '../../model/todo.actions';

@Component({
    selector: 'todo-remove',
    templateUrl: './todo-remove.html'
})
export class TodoRemoveComponent implements OnInit {

    @Input() todo: ToDo
    @ViewChild('removeButton') removeButton
    @Output() onRemove = new EventEmitter<any>()

    ngOnInit(): void {
        Observable.fromEvent(this.removeButton.nativeElement, 'click')
            .mapTo({action: TODO_ACTION.REMOVE, data: this.todo})
            .subscribe(this.onRemove)
    }
}