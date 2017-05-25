/**
 * Created by kevinkreuzer on 25.05.17.
 */
const Observable = require('rxjs').Observable

Observable.from([1,2,3,4,5])
    .single(x => x === 4)
    .subscribe(e => console.log(e))
