/**
 * Created by kevinkreuzer on 25.05.17.
 */
const Observable = require('rxjs').Observable

const ticks$ = Observable.interval(1000)

ticks$
    .switchMap(val => {
        if(val > 5){
            return Observable.throw('Value is bigger than five')
        }
        return Observable.of(val)
    })
    .retry(2)
    .subscribe(
        e => console.log(e),
        err => console.error(err),
        _ => console.inf('Done')
    )
