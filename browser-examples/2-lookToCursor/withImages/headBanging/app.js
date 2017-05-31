/**
 * Created by kevinkreuzer on 17.05.17.
 */
const IMAGE_NAMES = Object.freeze({
    TOP_RIGHT: 'TOP_RIGHT',
    STRAIGHT_RIGHT: 'STRAIGHT_RIGHT',
    BOTTOM_RIGHT: 'BOTTOM_RIGHT',
    TOP_LEFT: 'TOP_LEFT',
    STRAIGHT_LEFT: 'STRAIGHT_LEFT',
    BOTTOM_LEFT: 'BOTTOM_LEFT'
})

const DIRECTIONS = Object.freeze({
    RIGHT: 'RIGHT',
    LEFT: 'LEFT'
})

const halfSecondTicks$ = Rx.Observable.interval(400)
const changeDirection$ = Rx.Observable.fromEvent(changeDirectionButton, 'click')
const direction$ = changeDirection$
    .map(e => DIRECTIONS.RIGHT)
    .scan((clickValue) => {
        return clickValue === DIRECTIONS.LEFT ? DIRECTIONS.RIGHT : DIRECTIONS.LEFT
    }, DIRECTIONS.RIGHT)
    .startWith(DIRECTIONS.RIGHT)

halfSecondTicks$.combineLatest(direction$)
    .switchMap(tickAndDirection => {
        const direction = tickAndDirection[1]
        changeImage(IMAGE_NAMES[`TOP_${direction}`])
        return Rx.Observable.interval(250).take(1).map(tick => direction)
    })
    .switchMap(direction => {
        changeImage(IMAGE_NAMES[`STRAIGHT_${direction}`])
        return Rx.Observable.interval(250).take(1).map(tick => direction)
    })
    .switchMap(direction => {
        changeImage(IMAGE_NAMES[`BOTTOM_${direction}`])
        return Rx.Observable.interval(250).take(1).map(tick => direction)
    })
    .subscribe(() => {
    })


