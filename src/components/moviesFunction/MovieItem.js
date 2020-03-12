import React from 'react';
import PropTypes from 'prop-types';

const MovieItem = ({ movieName, releaseYear, starActor }) => {

return (
  <section>
    <h1>{movieName}</h1>
    <h2>{releaseYear}</h2>
    <h3>{starActor}</h3>
  </section>
)

}


MovieItem.propTypes = {
  movieName: PropTypes.string.isRequired,
  releaseYear: PropTypes.string.isRequired,
  starActor: PropTypes.string.isRequired

}
export default MovieItem;