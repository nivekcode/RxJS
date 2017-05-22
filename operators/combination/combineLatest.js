/**
 * Created by kevinkreuzer on 21.05.17.
 */
const Observable = require('rxjs').Observable

const ticksOne$ = Observable.interval(1000).take(3)
const ticksTwo$ = Observable.interval(500).take(8)

Observable.combineLatest(ticksOne$, ticksTwo$)
    .subscribe(
        e => console.log(e),
        err => console.error(err),
        _ => console.info('I am done')
    )
