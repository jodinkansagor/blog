import React, { useState } from 'react';
import MovieInput from '../moviesFunction/MovieInput';
import MovieList from '../moviesFunction/MovieList';

const MoviePage = () => {
  const [movieName, setMovieName] = useState('')
  const [releaseDate, setReleaseDate] = useState('')
  const [starActor, setStarActor] = useState('')
  const [movieList, setMovieList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    setMovieList(movieList => [...movieList, {
      movieName,
      releaseDate, 
      starActor
    }])
  }


  return (
    <section>
      <MovieInput
        movieName={movieName}
        setMovieName={setMovieName}
        releaseDate={releaseDate}
        setReleaseDate={setReleaseDate}
        starActor={starActor}
        setStarActor={setStarActor}
        onSubmit={handleSubmit}
      />
      <MovieList movieList={movieList} />
    </section>
  )
};


export default MoviePage;