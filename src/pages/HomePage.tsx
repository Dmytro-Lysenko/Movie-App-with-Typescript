import React, { useEffect, useState } from "react";
import useHttp from "../hooks/use-http";
import SearchMovie from "../components/SearchMovie";
import Movie from "../components/Movie";

const testData = {
  id: "20eeddsdfssaas2-01-24T19:22:01.588Z",
  title: "Null",
  actors: "Jacob Richardson",
  poster:
    "https://m.media-amazon.com/images/M/MV5BMjA0OTAzODY2MF5BMl5BanBnXkFtZTcwNjA2NzMzMg@@._V1_SX300.jpg",
  year: "2012",
};

const testData1 = [
  {
    id: "20eeddsdfssaas2-01-24T19:22:01.588Z",
    title: "Null",
    actors: "Jacob Richardson",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjA0OTAzODY2MF5BMl5BanBnXkFtZTcwNjA2NzMzMg@@._V1_SX300.jpg",
    year: "2009",
  },
  {
    id: "202-01-24T19:22:01.588Z",
    title: "REEED",
    actors: "Jacob Richardson",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjA0OTAzODY2MF5BMl5BanBnXkFtZTcwNjA2NzMzMg@@._V1_SX300.jpg",
    year: "2020",
  },
];

const HomePage = () => {
  const [movie, setMovie] = useState<any>({});
  const [movieTitle, setMovieTitle] = useState<string | null>(null);

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
      // const loadedTasks: string[] = [];
      // for (const taskKey in transformObject) {
      //   const newBook = {
      //     id: taskKey,
      //     ...transformObject[taskKey],
      //   };
      //   loadedTasks.push(newBook);
      // }

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
      <Movie movie={movie} />
    </React.Fragment>
  );
};

export default HomePage;
