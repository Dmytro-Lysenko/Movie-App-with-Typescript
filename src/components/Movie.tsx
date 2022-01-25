import React, { useContext } from "react";
import MovieContext from "../store/movie-context";
import classes from "./Movie.module.css";

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

  const isInWatchList: any = movieCtx.isInWatchList(props.movie.title);

  const addToWatchListHandler = (movie: {
    id: string;
    title: string;
    year: string;
    actors: string;
    poster: string;
  }) => {
    if (isInWatchList) {
      movieCtx.deleteFromWatchListMovie(movie.title);
    } else {
      movieCtx.addToWatchListMovie(movie);
    }
  };

  return (
    <div className={classes.card}>
      <h1>{props.movie.title}</h1>
      <img src={props.movie.poster} alt={props.movie.title} />
      <h1>{props.movie.year}</h1>
      <h1>{props.movie.actors}</h1>
      <div>
        <button onClick={() => addToWatchListHandler(props.movie)}>
          {!isInWatchList ? "Add to watch list" : "Delete from watchlist"}
        </button>
      </div>
    </div>
  );
};

export default Movie;
