import { useContext, useEffect, useState } from "react";
import MovieContext from "../store/movie-context";
import Movie from "../components/Movie";

// const testData = [
//   {
//     id: "20eeddsdfssaas2-01-24T19:22:01.588Z",
//     title: "Null",
//     actors: "Jacob Richardson",
//     poster:
//       "https://m.media-amazon.com/images/M/MV5BMjA0OTAzODY2MF5BMl5BanBnXkFtZTcwNjA2NzMzMg@@._V1_SX300.jpg",
//     year: "2009",
//   },
//   {
//     id: "202-01-24T19:22:01.588Z",
//     title: "REEED",
//     actors: "Jacob Richardson",
//     poster:
//       "https://m.media-amazon.com/images/M/MV5BMjA0OTAzODY2MF5BMl5BanBnXkFtZTcwNjA2NzMzMg@@._V1_SX300.jpg",
//     year: "2020",
//   },
// ];

const WatchListPage = () => {
  const movieCtx = useContext(MovieContext);
  // const updMoview: any = [...movieCtx.watchListMovies];
  const [watchlistMovies, setWatchListMovies] = useState<any[]>();

  console.log(movieCtx.watchListMovies);
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
