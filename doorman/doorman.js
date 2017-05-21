/**
 * Created by kevinkreuzer on 21.05.17.
 */

const commands = [
    {emoji: '🕺', name: 'dancer'},
    {emoji: '🍺', name: 'beer'},
];

// Create custom commands
commands.forEach(({name, emoji}) => window.console[name] = (...args) => console.log(emoji + ' ' + args.join(', ')));

const doorHandle = document.querySelector('#door-handle')
const arrivalPersons$ = Rx.Observable.interval(1500)
    .map(e => harryPotterNames.random())
    .take(20)
const openDoor$ = Rx.Observable.fromEvent(doorHandle, 'mousedown')
const closeDoor$ = Rx.Observable.fromEvent(doorHandle, 'mouseup')

arrivalPersons$.subscribe(
    character => console.dancer(`${character} tries to enter....`),
    err => console.error(err),
    _ => console.log('No more people interested in the party')
)

arrivalPersons$
    .windowToggle(openDoor$, () => closeDoor$)
    .mergeAll()
    .subscribe(character => console.beer('Letting in ', character))


