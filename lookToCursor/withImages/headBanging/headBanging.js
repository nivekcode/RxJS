/**
 * Created by kevinkreuzer on 17.05.17.
 */
const image = document.querySelector('img')

const IMAGE_NAMES = Object.freeze({
    TOP_RIGHT: 'TOP_RIGHT',
    STRAIGHT_RIGHT: 'STRAIGHT_RIGHT',
    BOTTOM_RIGHT: 'BOTTOM_RIGHT'
})

const changeImage = (imageName) => image.setAttribute('src', `../images/${imageName}.jpg`)

Rx.Observable.interval(500)
    .switchMap(() => {
        changeImage(IMAGE_NAMES.TOP_RIGHT)
        return Rx.Observable.interval(250).take(1)
    })
    .do(() => {
        changeImage(IMAGE_NAMES.STRAIGHT_RIGHT)
        return Rx.Observable.interval(250).take(1)
    })
    .do(() => {
        changeImage(IMAGE_NAMES.BOTTOM_RIGHT)
        return Rx.Observable.interval(250).take(1)
    })
    .subscribe(() => {
    })


