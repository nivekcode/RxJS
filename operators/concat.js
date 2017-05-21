/**
 * Created by kevinkreuzer on 21.05.17.
 */
const Observable = require('rxjs').Observable

const ticksOne$ = Observable.of(1, 2, 3)
const ticksTwo$ = Observable.of(4, 5, 6)

Observable.concat(ticksOne$, ticksTwo$)
    .subscribe(
        e => console.log(e),
        err => console.error(err),
        _ => console.info('Done ticking')
    )
