/**
 * Created by kevinkreuzer on 21.05.17.
 */
const arrivalPersons$ = Rx.Observable.interval(1500)
    .map(e => harryPotterNames.random())
    .take(20)
const openDoor$ = Rx.Observable.fromEvent(doorHandle, 'mousedown')
const closeDoor$ = Rx.Observable.fromEvent(doorHandle, 'mouseup')

arrivalPersons$
    .do(character => console.dancer(`${character} tries to enter....`))
    .windowToggle(openDoor$, () => closeDoor$)
    .mergeAll()
    .subscribe(character => logBeer(character),
        err => console.error(err),
        () => finsihParty()
    )


