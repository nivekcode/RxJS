/**
 * Created by kevinkreuzer on 25.05.17.
 */
const Observable = require('rxjs').Observable

Observable.interval(1000)
    .map(value => {
        if (value > 5) {
            throw 'Bigger than five'
        }
        return value
    })
    .retryWhen(errors => errors
        .do(err => console.log('An error occured, retry in 1 Second'))
        .delay(1000)
        .take(3)
    )
    .subscribe(
        e => console.log(e),
        err => console.error(err),
        _ => console.info('Done')
    )
