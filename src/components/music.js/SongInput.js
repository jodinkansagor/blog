import React from 'react';
import PropTypes from 'prop-types';

const SongInput = ({ songName, songArtist, onChange, onSubmit }) => (

  <form onSubmit={onSubmit}>
    <label>Enter the song name: <input type="text" name="songName" value={songName} onChange={onChange} /></label>
    <label>Enter the artist's name: <input type="text" name="songArtist" value={songArtist} onChange={onChange} /></label>
    <button>Add Song To Faves!</button>
  </form>

);

SongInput.propTypes = {
  songName: PropTypes.string.isRequired,
  songArtist: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default SongInput;