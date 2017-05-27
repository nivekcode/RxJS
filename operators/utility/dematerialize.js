/**
 * Created by kevinkreuzer on 27.05.17.
 */
const Observable = require('rxjs').Observable
const Notification = require('rxjs').Notification

/*
A RX Notification contains the following fields: kind, value, error, hasValue
Dematerialize turns notification objects into notification values.
 */

Observable.from([
    Notification.createNext('Success'),
    Notification.createError('Sample error')
])
    .dematerialize()
    .subscribe(
        e => console.log('Value ', e),
        err => console.error('Error: ', err),
        _ => console.info('Done')
    )
