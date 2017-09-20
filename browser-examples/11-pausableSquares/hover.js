function createHoverStream(domElement, id) {
    return Rx.Observable.merge(
        Rx.Observable.fromEvent(domElement, 'mouseenter')
            .mapTo(id),
        Rx.Observable.fromEvent(domElement, 'mouseleave')
            .mapTo(0),
    )
}

const hover$ = Rx.Observable.merge(
    createHoverStream(awesomeDiv1, 1),
    createHoverStream(awesomeDiv2, 2),
    createHoverStream(awesomeDiv3, 3),
    createHoverStream(awesomeDiv4, 4)
)
    .startWith(0)

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
