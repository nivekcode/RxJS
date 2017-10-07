class MyObservable {

    constructor(subscribe) {
        this.subscribe = subscribe
    }

    static subscribe(next, error, complete) {
        let observer;
        if (typeof next === 'function') {
            observer = {
                next,
                error: error || function () {
                },
                error: complete || function () {
                }
            }
        }
        observer = next;
        return this.subscribe(observer);
    }

    static create(subscribe) {
        return new Observable(function () {
            subscribe();
        })
    }

    static tick(milliseconds) {
        return new MyObservable(function subscribe(observer) {
            let counter = 0;
            const interval = setInterval(() => {
                observer.next(++counter)
            }, milliseconds)
            return {
                unsubscribe: () => clearInterval(interval)
            }
        })
    }
}

module.exports = MyObservable