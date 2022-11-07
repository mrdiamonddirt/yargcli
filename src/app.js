// Task:
// • Build an improved version of the movie app.
// • Use the yargs commands to collect targeted
// data from each user response.
// • Define functions in a separate file and import to
// app.js.
// • Store optional data on movies.
// • Console log user input at app termination.
// Stretch goal - Add multiple movies.

const yargs = require('yargs')
// const Movie = require('./utils/index');

console.table(yargs.argv)
