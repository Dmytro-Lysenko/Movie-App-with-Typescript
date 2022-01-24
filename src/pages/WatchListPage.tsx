import { useContext } from "react";
import MovieContext from "../store/movie-context";

const WatchListPage = () => {
    const movieCtx = useContext(MovieContext)

    console.log(movieCtx.watchListMovies)
  return <div>Watch list pgae</div>;
};

export default WatchListPage;
