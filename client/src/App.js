import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SavedList from './Movies/SavedList';
import { 
  useRouteMatch,
  Route,
  Switch
} from 'react-router-dom';
import Movie from './Movies/Movie'
import MovieList from './Movies/MovieList'

export default function App (props) {
  const { movie } = props

  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  const { path, url } = useRouteMatch();

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          //  console.log(response)
          setMovieList(response.data);
        })
        
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };
 
  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

      <Switch>
        <Route path={`/movies/:movieId`}>
          <Movie movie={movie} />
        </Route>
        <Route path={`/`}>
          <MovieList movieList={movieList}/>
        </Route>
      </Switch>
    </div>
  );
}
