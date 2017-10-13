import {Injectable} from '@angular/core';
import {ToDo} from './todo.model';
import {HttpClient, HttpParams} from '@angular/common/http';

// import 'rxjs/Rx'; // Note: we should only include the operators we need to tune package size
import {Observable} from 'rxjs/Observable';

const backendUrl = 'http://localhost:3456/todos';

@Injectable()
export class ToDoService {

    constructor(private http: HttpClient) {
    }

    getTodos(): Observable<ToDo[]> {
        return this.http.get(backendUrl)
            .map((res: any) => res.data.map((r) => {
                const todo = new ToDo(r.title);
                todo.completed = r.completed;
                todo.id = r.id;
                return todo;
            }))
            .catch(this.handleError);
    }

    saveTodo(todo: ToDo): Observable<any> {
        return this.http.post(backendUrl, todo)
    }

    updateTodo(todo: ToDo) {
        todo.completed = true
        return this.http.put(`${backendUrl}/${todo.id}`, todo)
    }

    deleteTodo(todo: ToDo) {
        return this.http.delete(`${backendUrl}/${todo.id}`)
    }

    private handleError(error: any) {
        const errMsg = error.message || 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}

