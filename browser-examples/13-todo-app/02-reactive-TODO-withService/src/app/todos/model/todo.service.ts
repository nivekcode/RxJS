import {Subject} from 'rxjs/Subject';
import {Injectable} from '@angular/core';
import {ToDo} from './todo.model';
import {Observable} from 'rxjs/Observable';

interface Payload {
    action: ACTION,
    data: any
}

enum ACTION {
    ADD,
    REMOVE
}

@Injectable()
export class TodoService {

    private todoChange$ = new Subject()

    constructor() {
    }

    public addTodo(title: string): void {
        const payload = {
            action: ACTION.ADD,
            data: title
        }
        this.todoChange$.next(payload)
    }

    public removeTodo(todo: ToDo): void {
        const payload = {
            action: ACTION.REMOVE,
            data: todo
        }
        this.todoChange$.next(payload)
    }

    public getTodos(): Observable<any> {
        return this.todoChange$.asObservable()
            .scan((todos: Array<ToDo>, payload: Payload) => {
                switch (payload.action) {
                    case ACTION.ADD:
                        return [...todos, new ToDo(payload.data)]
                    case ACTION.REMOVE:
                        return todos.filter(todo => todo !== payload.data)
                    default:
                        return todos
                }
            }, [])
    }
}