/**
 * Created by kevinkreuzer on 24.05.17.
 */
const Observable = require('rxjs').Observable

const twoSecondsTicks$ = Observable.interval(2000).take(3)
const halfSecondsTicks$ = Observable.interval(500)

twoSecondsTicks$
    .withLatestFrom(halfSecondsTicks$)
    .map(([first, second]) => `First: ${first}, Second: ${second}`)
    .subscribe(
        e => console.log(e),
        err => console.error(err),
        _ => console.info('I am done')
    )
