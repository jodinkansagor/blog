import React from 'react';
import PropTypes from 'prop-types';
import SongItem from './SongItem';

const SongList = ({ songList }) => {
  const songListElements = songList.map((song, i) => (
    <li key={i}>
      <SongItem songName={song.songName} songArtist={song.songArtist}/>
    </li>
  ))

  return (
    <ul>
      {songListElements}
    </ul>
  )
}

SongList.propTypes = {
  songList: PropTypes.arrayOf(PropTypes.shape({
    songName: PropTypes.string.isRequired,
    songArtist: PropTypes.string.isRequired
  }))
}

export default SongList;
