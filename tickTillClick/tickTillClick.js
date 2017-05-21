/**
 * Created by kevinkreuzer on 21.05.17.
 */

Rx.Observable.fromEvent(document, 'click')
    .subscribe(
        e => console.log(e)
    )
