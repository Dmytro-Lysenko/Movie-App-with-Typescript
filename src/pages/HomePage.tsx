import React, { useEffect, useState } from "react";
import useHttp from "../hooks/use-http";
import SearchMovie from "../components/SearchMovie";
import Movie from "../components/Movie";

const HomePage = () => {
  const [movie, setMovie] = useState<any>({});
  const [movieTitle, setMovieTitle] = useState<string>(" ");

  const { isLoading, error, sendRequest: fetchBook } = useHttp();
  const bookUrl =
    "https://react-app-81b61-default-rtdb.europe-west1.firebasedatabase.app/books.json";

  useEffect(() => {
    const movieUrl = `http://www.omdbapi.com/?t=${movieTitle}&apikey=461f08e0`;
    const transFormData = (transformObject: any) => {
      const updatedObject = {
        id: new Date().toISOString(),
        title: transformObject.Title,
        actors: transformObject.Actors,
        poster: transformObject.Poster,
        year: transformObject.Year,
      };

      setMovie(updatedObject);
    };
    fetchBook(movieUrl, transFormData);
  }, [fetchBook, movieTitle]);

  const searchHandler = (enteredFilm: string) => {
    setMovieTitle(enteredFilm);
  };

  return (
    <React.Fragment>
      {error && <p>its an error!</p>}
      <SearchMovie onSearch={searchHandler} />
      {movieTitle === " " ? " " : <Movie movie={movie} />}
    </React.Fragment>
  );
};

export default HomePage;
