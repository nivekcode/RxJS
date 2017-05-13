/**
 * Created by kevinkreuzer on 13.05.17.
 */
const MyObservable = require('./../myObservable')

/*
 let test$ = MyObservable.create(function (observer) {
 observer.next('Batman')
 observer.next('Aquaman')
 observer.next('Spiderman')
 observer.complete()
 });
 */

let test$ = MyObservable.from(['Batman', 'Spiderman', 'Superman', 'Flash', 'Gren Lantern'])

let observer = {
    next: e => console.log(e),
    error: e => console.error(err),
    complete: () => console.info('I am done')
}

test$
    .map(hero => `Mapped ${hero}`)
    .filter(hero => hero.includes('man'))
    .take(2)
    .subscribe(observer)
/*
 test$.subscribe(
 e => console.log(e),
 err => console.error(err),
 () => console.info('I am done')
 )
 */


let interval$ = MyObservable.interval(1000)
    .subscribe(
        e => console.log(e),
        err => console.error(err),
        _ => console.info('Done')
    )
