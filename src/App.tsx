import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";

import useHttp from "./hooks/use-http";

const bookUrl =
  "https://react-app-81b61-default-rtdb.europe-west1.firebasedatabase.app/books.json";

const movieUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=461f08e0";

function App() {
  const [movie, setMovie] = useState<string[]>([]);

  const { isLoading, error, sendRequest: fetchBook } = useHttp();

  useEffect(() => {
    const transFormData = (transformObject: any) => {
      // console.log(transformObject);

      // const loadedTasks: string[] = [];
      // for (const taskKey in transformObject) {
      //   const newBook = {
      //     id: taskKey,
      //     ...transformObject[taskKey],
      //   };
      //   loadedTasks.push(newBook);
      // }

      setMovie(transformObject);
    };
    fetchBook(movieUrl, transFormData);
  }, [fetchBook]);

  return (
    <React.Fragment>
      <Movie movie={movie} />
      <h1>hello</h1>
      <button>Find</button>
    </React.Fragment>
  );
}

export default App;
