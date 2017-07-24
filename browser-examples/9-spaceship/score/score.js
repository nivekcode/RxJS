/**
 * Created by kevinkreuzer on 24.07.17.
 */
const scoreSubject = new Rx.Subject()
const score$ = scoreSubject.scan(function (prev, cur) {
    return prev + cur
}, 0)
    .startWith(0)
