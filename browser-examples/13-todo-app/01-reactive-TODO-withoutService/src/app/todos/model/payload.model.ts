import {TODO_ACTION} from './todo.actions';

export interface Payload {
    action: TODO_ACTION,
    data: any
}