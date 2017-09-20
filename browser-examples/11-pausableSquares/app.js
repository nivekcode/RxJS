const observer = {
    next: id => hideAwesomeDiv(id),
    error: err => console.error('An error occured'),
    complete: () => console.log('Timer exceeded')
}

Rx.Observable.merge(
    createPausableTimer(1),
    Rx.Observable.timer(1000).switchMap(() => createPausableTimer(2)),
    Rx.Observable.timer(2000).switchMap(() => createPausableTimer(3)),
    Rx.Observable.timer(3000).switchMap(() => createPausableTimer(4))
)
    .subscribe(observer)
