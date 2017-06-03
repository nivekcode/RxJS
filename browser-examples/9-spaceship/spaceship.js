/**
 * Created by kevinkreuzer on 03.06.17.
 */
const spaceship$ = Rx.Observable.fromEvent(canvas, 'mousemove')
    .map(mouseEvent => ({x: mouseEvent.x, y: mouseEvent.y}))
    .startWith({x: canvas.width / 2 - (SPACESHIP_WIDTH / 2), y: canvas.height - SPACESHIP_HEIGHT * 2})
