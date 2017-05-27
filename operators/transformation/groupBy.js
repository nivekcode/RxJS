/**
 * Created by kevinkreuzer on 25.05.17.
 */
const Observable = require('rxjs').Observable

const MOVIES = Object.freeze({
    LORD_OF_THE_RINGS: 'LORD_OF_THE_RINGS',
    HARRY_POTTER: 'HARRY_POTTER',
    BADMAN: 'BADMAN'
})

const roles = [
    createCharacter('Frodo Beutlin', MOVIES.LORD_OF_THE_RINGS),
    createCharacter('Badman', MOVIES.BADMAN),
    createCharacter('Sam Weiss Gamgee', MOVIES.LORD_OF_THE_RINGS),
    createCharacter('Harry Potter', MOVIES.HARRY_POTTER),
    createCharacter('Hermine Granger', MOVIES.HARRY_POTTER),
    createCharacter('Gandalf', MOVIES.LORD_OF_THE_RINGS),
]

function createCharacter(character, movie) {
    return {character, movie}
}

Observable
    .from(roles)
    .groupBy(roles => roles.movie)
    .mergeMap(group => group
        .reduce((accumulated, role) => {
            accumulated.name = role.movie
            accumulated.characters.push(role.character)
            return accumulated
        }, {name: undefined, characters: []})
    )
    .subscribe(
        e => console.log(e),
        err => console.error(err),
        _ => console.info('Done')
    )
