/**
 * Created by kevinkreuzer on 03.06.17.
 */
Rx.Observable
    .combineLatest(
        starfield$, spaceship$, enemies$, shot$,
        (stars, spaceship, enemies, shot) => ({stars, spaceship, enemies, shot})
    )
    .sampleTime(50)
    .subscribe(
        actors => paint(actors)
    )
