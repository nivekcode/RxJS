/**
 * Created by kevinkreuzer on 09.05.17.
 */
var recognition = new webkitSpeechRecognition();
recognition.lang = 'en-US';
recognition.continuous = true;
recognition.interimResults = true;
recognition.start();

const speech$ = new Rx.Observable(observer => {
    recognition.onresult = function (event) {
        let found = Array.from(event.results[event.results.length -1])
            .find(result => {
                console.log(result.transcript)
                return result.transcript.trim().includes('drop')
            })
        if (found) {
            observer.next()
        }
    }
})


