/**
 * Created by kevinkreuzer on 03.06.17.
 */
const NUMBER_OF_STARS = 250
const SPEED = 50

Rx.Observable.range(1, NUMBER_OF_STARS)
    .map(_ => ({
        x: parseInt(Math.random() * canvas.width),
        y: parseInt(Math.random() * canvas.height),
        size: Math.random() * 3 + 1
    }))
    .toArray()
    .mergeMap(stars => Rx.Observable
        .interval(SPEED)
        .map(_ => {
            stars.forEach(star => {
                star.y >= canvas.height ? star.y = 0 : star.y += 3
            })
            return stars
        })
    )
    .subscribe(
        stars => paintStarts(stars),
        err => console.error(err),
        _ => console.info('Done')
    )
