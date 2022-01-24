const Movie = (props) => {
  console.log(props.movie);
  return (
    <div>
      <h1>{props.movie.Title}</h1>
      <h1>{props.movie.Year}</h1>
      <h1>{props.movie.Actors}</h1>
      <h1>{props.movie.Country}</h1>
      <h1>{props.movie.Director}</h1>
      <h1>{props.movie.Genre}</h1>
      <img src={props.movie.Poster} alt={props.movie.Title} />
    </div>
  );
};

export default Movie;
