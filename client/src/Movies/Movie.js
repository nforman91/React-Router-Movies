import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useRouteMatch } from 'react-router-dom';

// import MovieCard from './MovieCard'

export default function Movie(props) {
  const [movie, setMovie] = useState();

  const { movieId } = useParams();
  const { path, url } = useRouteMatch();
  
  console.log(path, url);

  let id = movie.id;
  // Change ^^^ that line and use a hook to obtain the :id parameter from the URL

  // const movies = movies.find(movie => movie.id === parseInt(movieId))

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${movieId}`) // Study this endpoint with Postman
      .then(response => {
        // Study this response with a breakpoint or log statements
        // and set the response data as the 'movie' slice of state
        setMovie(response.movie);
      })
      .catch(error => {
        console.error(error);
      });
    // This effect should run every time time
    // the `id` changes... How could we do this?
  }, [id]);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => { }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;

  return (
    <div className="save-wrapper">
      {/* <MovieCard /> */}
        <h3>Actors</h3>
        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      <div className="save-button">Save</div>
    </div>
  );
}
