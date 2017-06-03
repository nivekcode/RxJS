/**
 * Created by kevinkreuzer on 02.06.17.
 */
const Observable = Rx.Observable

const mousedown$ = Observable.fromEvent(canvas, 'mousedown')
const mouseup$ = Observable.fromEvent(canvas, 'mouseup')
const mousemove$ = Observable.fromEvent(canvas, 'mousemove')

mousedown$
    .mergeMap(mousedown => mousemove$
        .takeUntil(mouseup$)
    )
    .map(mousemove => ({x: mousemove.x, y: mousemove.y}))
    .subscribe(
        coordinates => {
            changeRectPosition(coordinates.x, coordinates.y - JUMBOTRON_HEIGHT)
        },
        err => console.error(err),
        _ => console.info('Done')
)

