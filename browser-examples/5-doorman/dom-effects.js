/**
 * Created by kevinkreuzer on 31.05.17.
 */
const commands = [
    {emoji: '🕺', name: 'dancer'},
    {emoji: '🍺', name: 'beer'},
];

// Create custom commands
commands.forEach(({name, emoji}) => window.console[name] = (...args) => console.log(emoji + ' ' + args.join(', ')));

const doorHandle = document.querySelector('#door-handle')

const logBeer = (character) => console.beer('Letting in ', character)
const finsihParty = () => console.log('No more people interested in the party')
