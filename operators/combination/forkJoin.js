/**
 * Created by kevinkreuzer on 22.05.17.
 */
const Observable = require('rxjs').Observable

const streamOne$ = Observable.of(1,2,3,4,5)
const streamTwo$ = Observable.interval(1000).take(5)
const streamThree$ = Observable.of('Hello', 'Amazing').delay(5000)

Observable.forkJoin(streamOne$, streamTwo$, streamThree$)
    .subscribe(e => console.log(e),
        err => console.error(err),
        _ => console.info('I am done')
    )

