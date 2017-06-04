/**
 * Created by kevinkreuzer on 04.06.17.
 */
const ENEMIE_FREQUENCY = 2000

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
