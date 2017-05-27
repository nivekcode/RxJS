/**
 * Created by kevinkreuzer on 25.05.17.
 */
const Observable = require('rxjs').Observable

const ticks$ = Observable.interval(1000).take(3)
const createInnerObservable = (iterable) => Observable
    .from(iterable)
    .concatMap(value => Observable
        .timer(1000)
        .mapTo(value)
    )

ticks$
    .concatMap(tick => {
        switch (tick) {
            case 0:
                return createInnerObservable([1, 2, 3, 4])
            case 1:
                return createInnerObservable([5, 6, 7, 8])
            case 2:
                return createInnerObservable([9, 10, 11, 12])
        }
    })
    .subscribe(
        e => console.log(e),
        err => console.error(err),
        _ => console.info('All values emitted')
    )
