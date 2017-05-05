/**
 * Created by kevinkreuzer on 04.05.17.
 */
const Rx = require('rxjs/Rx');
const BATMAN = 'Batman'
const SUPERMAN = 'Superman'
const FLASH = 'Flash'

//Creating the Observers
let createObserver = heroname => ({
    next(i){
        console.log(`I am ${heroname} and the ${i.item} belongs to me`)
    },
    error(err){
        console.error(err)
    },
    complete(){
        console.info('No more elements')
    }
})

let batman = createObserver(BATMAN)
let superman = createObserver(SUPERMAN)
let flash = createObserver(FLASH)

let createItem = (heroname, item) => ({heroname, item})

let items$ = new Rx.Observable(observer => {
    observer.next(createItem(BATMAN, 'Batmobil'))
    observer.next(createItem(SUPERMAN, 'Blue suit'))
    observer.next(createItem(BATMAN, 'Batarang'))
    observer.next(createItem(FLASH, 'Red suit'))
    observer.next(createItem(FLASH, 'Arrow'))
    observer.next(createItem(BATMAN, 'Gun'))
    observer.next(createItem(FLASH, 'Yellow shoes'))
    observer.next(createItem(SUPERMAN, 'Glases'))
})

const subject = new Rx.Subject()

subject.filter(item => item.heroname === BATMAN).subscribe(batman)

subject.filter(item => item.heroname === SUPERMAN)
    .subscribe(superman)

subject.filter(item => item.heroname === FLASH)
    .subscribe(flash)

items$.subscribe(subject);