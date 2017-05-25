/**
 * Created by kevinkreuzer on 25.05.17.
 */
const Observable = require('rxjs').Observable

Observable.throw('Super bad error')
    .catch(error => Observable.of(`Catched ${error}`))
    .subscribe(
        e => console.log(e),
        err => console.error(err),
        _ => console.info('Done')
    )

const ticks$ = Observable.interval(1000)
ticks$
    .map(tick => Observable.throw('Error from inner observable'))
    .mergeAll()
    .catch(error => Observable.of(`Catched error:  ${error}`))
    .subscribe(
        e => console.log(e),
        err => console.error(err),
        _ => console.info('I am Done')
    )


