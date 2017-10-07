const MyObservable = require('./myObservable')

/*
const myObservable = new MyObservable(observer => {
    observer.next('Superman')
    observer.next('Batman')
    setTimeout(() => {
        observer.next('Flash')
        observer.complete()
    }, 3000)
})
*/
const tickObservable = MyObservable.tick(1000)

const observer = {
    next: hero => console.log(hero + ' arrives'),
    error: err => console.error(err),
    complete: _ => console.log('Done')
}

const tickSubscription = tickObservable.subscribe(observer)

setTimeout(() => {
    tickSubscription.unsubscribe()
}, 20000)
