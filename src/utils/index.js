const yargs = require('yargs')
const input = yargs.argv;

function Movie(argVec) {
    if (argVec === 'add') {
      const newMovie = new Movie(argVec.actor, argVec.title)
      newMovie.add();
    }
}

Movie(input)

module.exports = Movie;