const movieArray = [];

class Movie {
  constructor(title, actor = "not specified") {
    this.title = title;
    this.actor = actor;
  }
  add() {
    movieArray.push(this)
    // console.log(this)
    console.table(movieArray)
  }
}

module.exports = Movie;