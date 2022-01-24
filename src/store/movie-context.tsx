import { createContext, useState } from "react";

const MovieContext = createContext({
  watchListMovies: [],
  addToWatchListMovie: (movie: object) => {},
  deleteFromWatchListMovie: (id: string) => {},
});

export const MovieContextProvider: React.FC = (props) => {
  const [watchMovies, setWatchMovies] = useState<any[]>([]);

  const addToWatchListHandler = (movie: object) => {
    console.log(movie);
    setWatchMovies((prevMovies) => {
      return [...prevMovies, movie];
    });
    console.log(watchMovies);
  };

  const deleteFromWatchListMovie = (id: string) => {
    setWatchMovies((prevMovies) => {
      return prevMovies.filter((movie) => movie.id !== id);
    });
    console.log(watchMovies)
  };

  const context: any = {
    watchListMovies: watchMovies,
    addToWatchListMovie: addToWatchListHandler,
    deleteFromWatchListMovie: deleteFromWatchListMovie,
  };

  return (
    <MovieContext.Provider value={context}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
