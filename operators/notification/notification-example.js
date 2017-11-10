const rxjs = require('rxjs')
const Observable = rxjs.Observable

/*
With the help of materialize and dematirialize we can complete an outer Observable when
its inner observable completes. Materialize sends the next event in a wrapped Notification type.
This wrapper contains some additional informations about the event. It also sends a Notification
when the inner observable completes. Dematirialize takes this notification object and converts it
back. If we use dematirialize on the outer observable it sends the completion event on the outer
observable. The outer observable will then complete when the inner observable completes.
 */

const outerStream$ = Observable.interval(2000).take(3)
const innerStream$ = Observable.interval(200).take(6)

outerStream$
    .do(e => console.log('========== Next one arrives ==========='))
    .switchMap(() => innerStream$.materialize())
    .dematerialize()    // Dematirializes the Nofification event - importent it also sends complete event on the outer observable
    .subscribe(
        tick => console.log('next', tick),
        error => console.error(error),
        () => console.log('Done')
    )
