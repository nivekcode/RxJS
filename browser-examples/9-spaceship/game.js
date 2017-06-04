/**
 * Created by kevinkreuzer on 03.06.17.
 */
Rx.Observable
    .combineLatest(
        starfield$, spaceship$, enemies$,
        (stars, spaceship, enemies) => ({stars, spaceship, enemies})
    )
    .subscribe(
        actors => paint(actors)
    )
