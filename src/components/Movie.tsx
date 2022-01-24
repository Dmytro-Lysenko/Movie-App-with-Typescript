import React, { useContext } from "react";
import MovieModel from "../models/MovieModal";
import MovieContext from "../store/movie-context";

const Movie: React.FC<{
  movie: {
    title: string;
    year: string;
    actors: string;
    id: string;
    poster: string;
  };
}> = (props) => {
  const movieCtx = useContext(MovieContext);

  const addToWatchListHandler = (movie: object) => {
    movieCtx.addToWatchListMovie(movie);
  };

  return (
    <div>
      <h1>{props.movie.title}</h1>
      <h1>{props.movie.year}</h1>
      <h1>{props.movie.actors}</h1>
      <h1>{props.movie.id}</h1>
      <img src={props.movie.poster} alt={props.movie.title} />
      <div>
        <button onClick={() => addToWatchListHandler(props.movie)}>
          Add to watch list
        </button>
      </div>
    </div>
  );
};

export default Movie;
