/**
 * Created by kevinkreuzer on 12.05.17.
 */
function MyObservable(subscribe) {
    this._subscribe = subscribe
}

MyObservable.prototype = {
    subscribe: function (onNext, onError, onComplete) {
        if (typeof onNext === 'function') {
            this._subscribe({
                next: onNext,
                error: onError || function () {
                },
                complete: onComplete || function () {
                }
            })
        } else {
            this._subscribe(onNext)
        }
    }
}

MyObservable.create = (observer) => new MyObservable(observer)

module.exports = MyObservable
