/**
 * Created by kevinkreuzer on 27.05.17.
 */
const Observable = require('rxjs').Observable

Observable.interval(1000)
    .take(10)
    .delayWhen(tick => tick % 2 === 0 ? Observable.timer(3000) : Observable.of(tick))
    .subscribe(
        e => console.log(e),
        err => console.error(err),
        _ => console.info('I am done')
    )
