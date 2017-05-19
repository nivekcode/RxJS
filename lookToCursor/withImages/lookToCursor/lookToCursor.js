/**
 * Created by kevinkreuzer on 17.05.17.
 */

const body = document.querySelector('body')
const image = document.querySelector('img')

const windowWith = window.innerWidth;
const windowHeight = window.innerHeight;

console.log('Width', windowWith)
console.log('Height', windowHeight)

const DIRECTION_DESCRIPTIONS = {
    BOTTOM: 'BOTTOM',
    TOP: 'TOP',
    STRAIGHT: 'STRAIGHT',
    LEFT: 'LEFT',
    RIGHT: 'RIGHT'
}

const getPositionDescription = (x, y) => {
    let ydescription = getYDescription(y)
    let xdescription = getXDescription(x)
    return `${ydescription}_${xdescription}`
}

const getYDescription = (y) => {
    if (y > (windowHeight / 2) - 10 && y < (windowHeight / 2) + 10) {
        return DIRECTION_DESCRIPTIONS.STRAIGHT
    }
    return y < (windowHeight / 2) ? DIRECTION_DESCRIPTIONS.TOP : DIRECTION_DESCRIPTIONS.BOTTOM
}

const getXDescription = (x) => {
    if (x > (windowWith / 2) - 10 && x < (windowWith / 2) + 10) {
        return DIRECTION_DESCRIPTIONS.STRAIGHT
    }
    return x < (windowWith / 2) ? DIRECTION_DESCRIPTIONS.LEFT : DIRECTION_DESCRIPTIONS.RIGHT
}

Rx.Observable.fromEvent(body, 'mousemove')
    .map(mousemove => ({
        x: mousemove.x,
        y: mousemove.y
    }))
    .map(cursorposition => getPositionDescription(cursorposition.x, cursorposition.y))
    .startWith('STRAIGHT_STRAIGHT')
    .subscribe(
        e => image.setAttribute('src', `../images/${e}.jpg`),
        err => console.error(err),
        _ => console.info('Done')
    )
