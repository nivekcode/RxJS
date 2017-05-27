/**
 * Created by kevinkreuzer on 27.05.17.
 */
const Observable = require('rxjs').Observable

Observable.interval(1000)
    .take(5)
    .do(tick => console.log(`Tick before mapping: ${tick}`))
    .mapTo('Awesome content')
    .do(mappedTick => console.log(`Tick after mapping: ${mappedTick}`))
    .subscribe(
        e => console.log(e),
        err => console.error(err),
        _ => console.info('Done')
    )
