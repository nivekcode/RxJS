/**
 * Created by kevinkreuzer on 21.05.17.
 */

const Observable = Rx.Observable

const updatePoints = (id, totalPoints) => {
    const domElment = document.querySelector(`#${id}-points`)
    domElment.innerHTML = `${id} points: ${totalPoints}`
}

const addClicks = (color) => Observable
    .fromEvent(document.querySelector(`#${color}-button`), 'click')
    .mapTo(1)
    .startWith(0)
    .scan((accumulated, value) => {
        return accumulated + value
    }, 0)
    .do(totalPoints => updatePoints(color, totalPoints))

Observable.combineLatest(
    addClicks('green'),
    addClicks('red'),
    (greenpoints, redpoints) => greenpoints + redpoints
)
    .subscribe(totalPoints => updatePoints('total', totalPoints))

