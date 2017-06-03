/**
 * Created by kevinkreuzer on 03.06.17.
 */
Rx.Observable
    .combineLatest(
        starfield$, spaceship$,
        (stars, spaceship) => ({stars, spaceship})
    )
    .subscribe(
        actors => paint(actors)
    )
