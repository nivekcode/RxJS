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

MyObservable.from = (iterable) => {
    return new MyObservable((observer) => {
        for (let i of iterable) {
            observer.next(i)
        }
        observer.complete()
    })
}

MyObservable.prototype.map = function (mapFunction) {
    var self = this;
    return new MyObservable(function (observer) {
        self.subscribe(
            item => observer.next(mapFunction(item)),
            _ => observer.error('An error occured while mapping'),
            _ => observer.complete()
        )
    })
}

MyObservable.prototype.filter = function (filterFunction) {
    var self = this
    return new MyObservable(function (observer) {
        self.subscribe(
            item => {
                if (filterFunction(item)) {
                    observer.next(item)
                }
            },
            _ => observer.error('An error occured while filtering'),
            _ => observer.complete()
        )
    })
}

MyObservable.prototype.take = function(number){
    var self = this
    return new MyObservable(function (observer){
        var counter = 0
        self.subscribe(
            item => {
                counter += 1
                if(counter <= number){
                    observer.next(item)
                }
            },
            _ => observer.error('An error occured during the take function'),
            _ => observer.complete()
        )
    })
}

module.exports = MyObservable
