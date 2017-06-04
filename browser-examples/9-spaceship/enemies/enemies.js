/**
 * Created by kevinkreuzer on 04.06.17.
 */
const ENEMIE_FREQUENCY = 2000

function getOneOrZero() {
    return Math.round(Math.random() * (1 - 0) + 0);
}

function getRandomNumberForRange(minimum, maximum) {
    return Math.random() * (maximum - minimum) + minimum
}

const enemies$ = Rx.Observable
    .interval(ENEMIE_FREQUENCY)
    .map(tick => ({
        x: Math.random() * canvas.width,
        y: 50
    }))
    .scan((enemies, newEnemie) => {
        enemies.push(newEnemie)
        return enemies
    }, [])
    .switchMap(enemies => Rx.Observable
        .interval(100)
        .map(_ => {
            enemies.forEach(enemie => {
                if (getOneOrZero() === 0) {
                    enemie.x += getRandomNumberForRange(1, 30)
                }
                else {
                    enemie.x -= getRandomNumberForRange(1, 30)
                }
            })
            return enemies
        })
    )
    .startWith([])
