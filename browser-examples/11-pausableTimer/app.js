const awesomeDiv = document.getElementById("awesomeDiv")
const mouseenter$ = Rx.Observable.fromEvent(awesomeDiv, 'mouseenter')
    .mapTo(true)
const mouseleave$ = Rx.Observable.fromEvent(awesomeDiv, 'mouseleave')
    .mapTo(false)
const hover$ = Rx.Observable.merge(mouseenter$, mouseleave$)
    .startWith(false)

function createPausableTimer(){
    let time = 0;

    return hover$.switchMap(pausable => {
            if (pausable) {
                return Rx.Observable.empty()
            }
            return Rx.Observable.interval(100)
                .map(() => time++)
                .take(30 - time)
                .materialize()
        }
    )
}

const observer = {
    next: tick => console.log('Ticking', tick),
    error: err => console.error('An error occured'),
    complete: () => console.log('Timer exceeded')
}

createPausableTimer()
    .dematerialize()
    .last()
    .subscribe(observer)

/*
{......E.......L.....}
{1,2,3,4,5,6,7,8,9,10}

{1,2,3,4........5,6,7,8,9,10}
*/
