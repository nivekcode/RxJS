const rxjs = require('rxjs')
const Observable = rxjs.Observable

Observable.interval(1000)
    .take(5)
    .do(e => console.log('Before materialization', e))
    .materialize()
    .do(e => console.log('After materialization', e))
    .dematerialize()
    .subscribe(
        e => console.log('next: ', e),
        error => console.error('error: ', error),
        () => console.log('Done')
    )