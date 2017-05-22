/**
 * Created by kevinkreuzer on 21.05.17.
 */
const Observable = require('rxjs').Observable

const streamOne$ = Observable.of(1,2,3)
const streamTwo$ = Observable.of(4,5,6).delay(3000)

Observable.concat(streamOne$, streamTwo$)
    .subscribe(
        e => console.log(e),
        err => console.error(err),
        _ => console.info('I am done')
    )

