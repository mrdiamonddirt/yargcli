const yargs = require('yargs')

const input = yargs.argv;
//  console.table(yargs.argv.actor)
//  console.table(yargs.argv.filmTitle)

if (input.actor) {
    console.log(`${input.actor} is in the film ${input.filmTitle}`)
}