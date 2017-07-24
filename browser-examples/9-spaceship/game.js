/**
 * Created by kevinkreuzer on 03.06.17.
 */
Rx.Observable
    .combineLatest(
        starfield$, spaceship$, enemies$, shot$,
        (stars, spaceship, enemies, shot) => ({stars, spaceship, enemies, shot})
    )
    .sampleTime(50)
    .takeWhile(function (actors) {
        return gameOver(actors.spaceship, actors.enemies) === false
    })
    .subscribe(
        actors => paint(actors)
    )
