const usernameInput = document.getElementById('username')
const messageInput = document.getElementById('message')
const sendButton = document.getElementById('sendButton')
const chat = document.getElementById('chat')

const send$ = Rx.Observable.fromEvent(sendButton, 'click')
    .map(e => JSON.stringify({
        username: usernameInput.value,
        message: messageInput.value
    }))


// Using an observer for the open
const observer = {
    next: response => {
        const messages = response.data
        chat.innerHTML = ''
        messages.forEach(message => {
            const messageString = `${message.username}: ${message.message}`
            chat.innerHTML += messageString + '\n';
        })
    },
    error: () => console.error(error),
    complete: () => console.log('Done')
};


const socket$ = new Rx.Observable.webSocket('ws://localhost:1337');
socket$.subscribe(observer);

//send$.subscribe(message => socket$.next(JSON.stringify(message)))
send$.subscribe(socket$)
