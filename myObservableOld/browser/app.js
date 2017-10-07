/**
 * Created by kevinkreuzer on 13.05.17.
 */

const button = document.getElementById('button-clicks')
const subscription = MyObservable.fromEvent(button, 'click')
    .subscribe(
        e => console.log('Clicked', e)
    )

setTimeout(() => {
    subscription.unsubscribe()
}, 5000)
