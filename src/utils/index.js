const yargs = require('yargs')
const input = yargs.argv;

function Movie(argVec) {
    if (argVec === 'add') {
      const newMovie = new Movie(argVec[0], argVec[1])
      newMovie.add();
    }
}

Movie(input)

module.exports = Movie;