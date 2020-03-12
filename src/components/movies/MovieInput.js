import React from 'react';
import PropTypes from 'prop-types';

const MovieInput = ({ onSubmit, onChange, movieName, releaseDate, starActor }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>What is your favorite movie? <input type="text" value={movieName} name="movieName" onChange={onChange} /></label>
      <label>When did it come out? <input type="text" value={releaseDate} name="releaseDate" onChange={onChange} /></label>
      <label>Who is in it? <input type="text" value={starActor} name="starActor" onChange={onChange} /></label>
      <button>Submit!</button>
    </form>
  )
}

MovieInput.propTypes = {
  movieName: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  starActor: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}

export default MovieInput;