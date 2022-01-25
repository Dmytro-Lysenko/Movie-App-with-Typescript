import { createContext, useState } from "react";

const MovieContext = createContext({
  watchListMovies: [],
  addToWatchListMovie: (movie: object) => {},
  deleteFromWatchListMovie: (title: string) => {},
  isInWatchList: (title: string) => {},
});

export const MovieContextProvider: React.FC = (props) => {
  const [watchMovies, setWatchMovies] = useState<any[]>([]);

  const addToWatchListHandler = (movie: object) => {
    console.log(movie);
    setWatchMovies((prevMovies) => {
      return [...prevMovies, movie];
    });
  };

  const deleteFromWatchListMovie = (title: string) => {
    setWatchMovies((prevMovies) => {
      return prevMovies.filter((movie) => movie.title !== title);
    });
  };

  const isInWatchListHandler = (title: string) => {
    return watchMovies.some((movie) => movie.title === title);
  };

  const context: any = {
    watchListMovies: watchMovies,
    addToWatchListMovie: addToWatchListHandler,
    deleteFromWatchListMovie: deleteFromWatchListMovie,
    isInWatchList: isInWatchListHandler,
  };

  return (
    <MovieContext.Provider value={context}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
