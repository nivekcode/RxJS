/**
 * Created by kevinkreuzer on 25.05.17.
 */
const Observable = require('rxjs').Observable

Observable.interval(500)
    .debounce(tick => Observable.timer(tick * 100))
    .subscribe(
        e => console.log(e),
        err => console.error(err),
        _ => console.info('Done')
    )
