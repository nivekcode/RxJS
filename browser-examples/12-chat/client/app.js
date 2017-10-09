// Using an observer for the open
const observer = {
    next: message => console.log('Message received', message),
    error: () => console.error(error),
    complete: () => console.log('Done')
};


const socket$ = new Rx.Observable.webSocket('ws://localhost:1337');
socket$.subscribe(observer);
socket$.next('Hallo')

