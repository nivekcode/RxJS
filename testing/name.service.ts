import {Subject} from 'rxjs';

export class NameService {

    names$ = new Subject();

    addName(name: string) {
        this.names$.next(name);
    }
}
