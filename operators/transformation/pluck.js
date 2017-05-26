/**
 * Created by kevinkreuzer on 25.05.17.
 */
const Observable = require('rxjs').Observable

const heroInformations = [
    createHeroInformation('Badman', 'Super strong', 'Badsuit'),
    createHeroInformation('Flash', 'Super fast', 'Red suit'),
    createHeroInformation('Superman', 'Laser eyes', 'Blue suit'),
]

function createHeroInformation(name, superpower, suit) {
    return {name, superpower, suit}
}

Observable.from(heroInformations)
    .pluck('name')
    .subscribe(
        e => console.log(e),
        err => console.error(err),
        _ => console.info('Done')
    )

