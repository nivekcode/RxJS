const MyObservable = require('./myObservable')

const tickObservable = MyObservable.tick(1000)

const observer = {
    next: item => console.log(item),
    error: err => console.error(err),
    complete: _ => console.log('Done')
}

const tickSubscription = tickObservable
    .filter(item => item % 2 === 0)
    .map(item => 'Item ' + item + ' is arriving')
    .subscribe(observer)

setTimeout(() => {
    tickSubscription.unsubscribe()
}, 10000)


