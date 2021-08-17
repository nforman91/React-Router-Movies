import React from 'react';

export default function MovieCard (props) {
  const { title, director, metascore } = props;

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:5000/api/movies/${movieId}`)
  //     .then(response => {
  //       setMovie(response.movie);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, [id]);

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
