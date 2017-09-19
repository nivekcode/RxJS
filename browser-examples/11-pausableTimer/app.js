/*
const mouseenter$ = Rx.Observable.fromEvent(awesomeDiv1, 'mouseenter')
    .mapTo(true)
const mouseleave$ = Rx.Observable.fromEvent(awesomeDiv2, 'mouseleave')
    .mapTo(false)
const hover$ = Rx.Observable.merge(mouseenter$, mouseleave$)
    .startWith(false)
    */

function createPausableTimer(id) {
    let time = 0;

    return hover$.switchMap(hoveredId => {
            if (hoveredId === id) {
                return Rx.Observable.empty()
            }
            return Rx.Observable.interval(100)
                .do(() => time++)
                .mapTo(id)
                .take(30 - time)
                .materialize()
        }
    )
        .dematerialize()
        .last()
}

const observer = {
    next: id => hideAwesomeDiv(id),
    error: err => console.error('An error occured'),
    complete: () => console.log('Timer exceeded')
}

Rx.Observable.merge(
    createPausableTimer(1),
    Rx.Observable.timer(1000).switchMap(() => createPausableTimer(2)),
    Rx.Observable.timer(2000).switchMap(() => createPausableTimer(3)),
    Rx.Observable.timer(3000).switchMap(() => createPausableTimer(4))
)
    .subscribe(observer)

/*
{......E.......L.....}
{1,2,3,4,5,6,7,8,9,10}

{1,2,3,4........5,6,7,8,9,10}
*/
