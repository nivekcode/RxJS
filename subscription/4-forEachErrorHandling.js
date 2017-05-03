/**
 * Created by kevinkreuzer on 03.05.17.
 */
const Observable = require('rxjs/Rx').Observable;

let heros$ = Observable.of('Batman', 'Spiderman', 'Aquaman');
let throwIfNotARealHero = (hero) => {
    if (hero === 'Aquaman') {
        throw 'Aquaman is not a real hero';
    }
}

//Error Handling with forEach
let promise = heros$.forEach(hero => {
    throwIfNotARealHero();
    console.log('Hero from forEach', hero);
});
promise.then(
    () => console.log('Done'),
    err => console.error(err)
);

//Error Handling with normal subscription
heros$.subscribe(
    hero => {
        throwIfNotARealHero(hero);
        console.log('Hero from normal subscription', hero);
    },
    err => console.error(err),
    () => console.info('I am done')
);