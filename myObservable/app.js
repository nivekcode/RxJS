const MyObservable = require('./myObservable')

const tickObservable = MyObservable.tick(1000)

const observer = {
    next: item => console.log(item),
    error: err => console.error(err),
    complete: _ => console.log('Done')
}

/*
const tickSubscription = tickObservable
    .filter(item => item % 2 === 0)
    .map(item => 'Item ' + item + ' is arriving')
    .subscribe(observer)

setTimeout(() => {
    tickSubscription.unsubscribe()
}, 10000)
*/

/*
tickObservable
    .take(5)
    .scan(function (total, value) {
        return total + value
    }, 0)
    .subscribe(observer)
    */

const tickObservableOne = MyObservable.tick(1000).mapTo('Tick from first observable')
const tickObservableTwo = MyObservable.tick(1500).mapTo('Tick from second observable')

const subscription = MyObservable.merge(tickObservableOne, tickObservableTwo)
    .subscribe(observer)

setTimeout(subscription.unsubscribe, 5000)
