class MyObservable {

    constructor(subscribe) {
        this._subscribe = subscribe
    }

    subscribe(next, error, complete) {
        let observer;
        if (typeof next === 'function') {
            observer = {
                next,
                error: error || function () {
                },
                error: complete || function () {
                }
            }
        } else {
            observer = next;
        }
        return this._subscribe(observer);
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

    map(projection) {
        const self = this;
        return new MyObservable(function subscribe(observer) {
            const subscription = self.subscribe(
                item => observer.next(projection(item)),
                error => observer.error,
                complete => observer.complete()
            )
            return {
                unsubscribe: () => subscription.unsubscribe()
            }
        })
    }

    filter(projection) {
        const self = this;
        return new MyObservable(function subscribe(observer) {
                const subscription = self.subscribe(
                    item => {
                        if (projection(item)) {
                            observer.next(item)
                        }
                    },
                    error => observer.error(error),
                    complete => observer.complete(complete))
                return {
                    unsubscribe: () => subscription.unsubscribe()
                }
            }
        )
    }
}

module.exports = MyObservable