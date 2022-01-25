import { useContext, useEffect, useState } from "react";
import MovieContext from "../store/movie-context";
import Movie from "../components/Movie";


const WatchListPage = () => {
  const movieCtx = useContext(MovieContext);
  const [watchlistMovies, setWatchListMovies] = useState<any[]>();

  useEffect(() => {
    setWatchListMovies(movieCtx.watchListMovies);
  }, [movieCtx.watchListMovies]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Watch list movies:</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {!watchlistMovies?.length ? (
          <h1 style={{ margin: "0 auto" }}>No movies</h1>
        ) : (
          watchlistMovies.map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};

export default WatchListPage;
