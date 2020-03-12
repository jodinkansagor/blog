import React from 'react';
import PropTypes from 'prop-types';

const SongItem = ({ songName, songArtist }) => {

  return (
    <>
      <h1>{songName}</h1>
      <h2>{songArtist}</h2>
    </>
  )
}

SongItem.propTypes = {
  songName: PropTypes.string.isRequired,
  songArtist: PropTypes.string.isRequired
}

export default SongItem;