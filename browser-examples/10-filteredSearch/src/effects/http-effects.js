/**
 * Created by kevinkreuzer on 09.06.17.
 */
import {Observable} from 'rxjs'
import {localPolls} from '../resources/localPolls'

export const loadPolls = () => Observable.create(observer => {
    getPolls(observer)
    })
    .catch(() => Observable.of(localPolls))

function getPolls(observer) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            this.status === 200 ? observer.next(JSON.parse(this.responseText)) : observer.error('An error occured')
        }
    };
    xhttp.open('GET', 'https://boiling-tor-31289.herokuapp.com/users/me/polls', true);
    xhttp.send();
}
