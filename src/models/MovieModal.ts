class MovieModel {
  id: string;
  title: string;
  actors: string;
  year: string;
  poster: string;

  constructor(
    movieTitle: string,
    movieActors: string,
    movieYear: string,
    moviePoster: string
  ) {
    this.title = movieTitle;
    this.id = new Date().toISOString();
    this.actors = movieActors;
    this.year = movieYear;
    this.poster = moviePoster;
  }
}

export default MovieModel;
