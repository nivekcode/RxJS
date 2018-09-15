import {interval, of, throwError} from 'rxjs';
import {retryWhen, switchMap} from 'rxjs/operators';

export function delayedRetry(delay: number, maxRetries: number): any {
    return (source$: any) =>
        source$.pipe(
            retryWhen(() => {
                return interval(delay).pipe(
                    switchMap((counter: number) => {
                        if (counter >= maxRetries) {
                            console.error('All retries failed');
                            return throwError('I give up');
                        }
                        console.info('I am going to retry');
                        return of(counter);
                    })
                )
            })
        );
}