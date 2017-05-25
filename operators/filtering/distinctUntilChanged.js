/**
 * Created by kevinkreuzer on 25.05.17.
 */
const Observable = require('rxjs').Observable

Observable.of(1,1,2,3,4,4,4,4,5,6,7,7,7,10)
    .distinctUntilChanged()
    .subscribe(e => console.log(e))
