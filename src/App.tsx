import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import HomePage from "./pages/HomePage";
import WatchListPage from "./pages/WatchListPage";
import { MovieContextProvider } from "./store/movie-context";

function App() {
  return (
    <MovieContextProvider>
      <Fragment>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/watch-list" element={<WatchListPage />}></Route>
        </Routes>
      </Fragment>
    </MovieContextProvider>
  );
}

export default App;
