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
                complete: complete || function () {
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

    mapTo(value) {
        const self = this;
        return new MyObservable(function subscribe(observer) {
            const subscription = self.subscribe(
                item => observer.next(value),
                error => observer.error(error),
                complete => observer.complete(complete)
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

    take(quantity) {
        const self = this;
        return new MyObservable(function subscribe(observer) {
            let counter = 0;
            const subscription = self.subscribe(
                item => {
                    if (counter === quantity) {
                        subscription.unsubscribe()
                        observer.complete()
                    } else {
                        counter++;
                        observer.next(item)
                    }
                },
                err => observer.error(err),
                complete => observer.complete()
            )

            return {
                unsubscribe: () => subscription.unsubscribe()
            }
        })
    }

    takeRandomly(min, max) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return this.take(randomNumber)
    }

    do(projection) {
        const self = this
        return new MyObservable(function subscribe(observer) {
            const subscription = self.subscribe(
                item => {
                    projection(item)
                    observer.next(item)
                },
                error => observer.error(error),
                complete => observer.complete(complete)
            )

            return {
                unsubscribe: () => subscription.unsubscribe()
            }
        })
    }

    static fromEvent(domElement, eventName) {
        return new MyObservable(function subscribe(observer) {
            const handler = function (event) {
                observer.next(event)
            }
            const eventListener = domElement.addEventListener(eventName, handler)
            return {
                unsubscribe: () => domElement.removeEventListener(eventName, eventListener)
            }
        })
    }

    switchMap(projection) {
        const self = this
        let currentSubscription;

        return new MyObservable(function subscribe(observer) {
            const subscription = self.subscribe(
                item => {
                    if (currentSubscription) {
                        currentSubscription.unsubscribe()
                    }
                    const currentObservable = projection(item)
                    currentSubscription = currentObservable.subscribe(
                        item => observer.next(item),
                        error => observer.error(error),
                        complete => observer.complete(complete)
                    )
                }
            )

            return {
                unsubscribe: () => {
                    currentSubscription.unsubscribe()
                    subscription.unsubscribe()
                }
            }
        })
    }

    mergeMap(projection) {
        const self = this
        let subscriptions = [];
        return new MyObservable(function subscribe(observer) {
            const subscription = self.subscribe(
                item => {
                    const newObservable = projection(item)
                    subscriptions.push(newObservable.subscribe(
                        item => observer.next(item),
                        error => observer.error(err),
                        complete => observer.complete(complete)
                    ))
                }
            )

            return {
                unsubscribe: () => {
                    subscriptions.forEach(sub => sub.unsubscribe())
                    subscription.unsubscribe()
                }
            }
        })
    }

    concatMap(projection) {
        const self = this
        let counter = 0
        let observables = []
        let subscriptions = []
        let isCurrentFinished = true

        return new MyObservable(function subscribe(observer) {

            const processCurrentObservable = () => {
                const currentObservable = observables[counter]
                isCurrentFinished = false
                subscriptions.push(currentObservable.subscribe(
                    item => observer.next(item),
                    error => observer.error(error),
                    complete => {
                        counter++
                        observer.complete(complete)
                        isCurrentFinished = true
                        processCurrentObservable()
                    }
                ))
            }

            const subscription = self.subscribe(
                item => {
                    observables.push(projection(item))
                    if (isCurrentFinished) {
                        processCurrentObservable()
                    }
                },
                error => observer.error(error),
                complete => observer.complete(complete)
            )

            return {
                unsubscribe: () => {
                    subscription.unsubscribe()
                    subscriptions.forEach(sub => sub.unsubscribe())
                }
            }
        })
    }
}

module.exports = MyObservable