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
const Movie = require('./utils/index');

function myApp(yargsobj) {
    if (yargsobj.add) {
        const newMovie = new Movie(yargsobj.title, yargsobj.actor)
        newMovie.add()
    } else if (yargsobj.addmulti) {
        const newMovie1 = new Movie(yargsobj.title1, yargsobj.actor1)
        newMovie1.add()
        const newMovie2 = new Movie(yargsobj.title2, yargsobj.actor2)
        newMovie2.add()
        const newMovie3 = new Movie(yargsobj.title3, yargsobj.actor3)
        newMovie3.add()
    }
    
}
myApp(yargs.argv)
