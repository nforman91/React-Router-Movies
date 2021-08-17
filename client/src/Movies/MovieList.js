import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom'

import MovieCard from './MovieCard'

export default function MovieList(props) {
  const {url} = useRouteMatch();
  const {movieList} = props;
  return (
    <div className="movie-list">
      {props.movieList.map(movie => (
        <Link to={`${url}/${movie.id}`}>
          <MovieDetails key={movie.id} movie={movie} />
        </Link>
      ))}
    </div>
  );
}

function MovieDetails() {
  
  return (
    <MovieCard />
  );
}
