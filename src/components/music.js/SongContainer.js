import React, { Component } from 'react';
import SongList from './SongList';
import SongInput from './SongInput';

export default class SongContainer extends Component {
  state = {
    songName: '',
    songArtist: '',
    songList: []
  }

  handleChange = ({ target }) => (
    this.setState({ [target.name]: target.value })
  )

  handleSubmit = event => {
    event.preventDefault();

    this.setState(state => ({
      songList: [...state.songList, {
        songName: state.songName,
        songArtist: state.songArtist
      }]
    }))
  }

  render() {

    const { songName, songArtist, songList } = this.state;
    return (
      <>
        <SongInput songName={songName} songArtist={songArtist} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <SongList songList={songList} />
      </>
    )
  }
}