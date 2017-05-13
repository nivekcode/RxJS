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

let test$ = new MyObservable(function (observer) {
    observer.next('Batman')
    observer.next('Aquaman')
    observer.next('Spiderman')
    observer.complete()
});

let observer = {
    next: e => console.log(e),
    error: e => console.error(err),
    complete: () => console.info('I am done')
}

test$.subscribe(observer);
test$.subscribe(
    e => console.log(e),
    err => console.error(err),
    () => console.info('I am done')
)
