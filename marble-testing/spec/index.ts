import {of, throwError} from 'rxjs';
import {switchMap, tap} from 'rxjs/operators';
import {delayedRetry} from './delayedRetry';

let counter = 0;

const source$ = of('Success').pipe(
    tap(() => counter++),
    switchMap(() => {
        if (counter < 4) {
            return throwError('Something went wrong')
        }
        return of('Success');
    })
);

const observer = {
    next: data => console.log('Next: ', data),
    error: error => console.log('Error: ', error),
    complete: () => console.log('Done')
};

source$.pipe(delayedRetry(1000, 5)).subscribe(observer);
