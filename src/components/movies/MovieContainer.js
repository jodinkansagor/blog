import React, { Component } from 'react'
import MovieList from './MovieList'
import MovieInput from './MovieInput';

export default class MovieContainer extends Component {

  state = {
    movieName: '',
    releaseDate: '',
    starActor: '',
    movieList: []
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState(state => ({
      movieList: ([...state.movieList, {
        movieName: state.movieName,
        releaseDate: state.releaseDate,
        starActor: state.starActor
      }])
    }))
  }


  render() {
    const { movieList, movieName, releaseDate, starActor } = this.state;

    return (
    <section>
      <MovieInput movieName={movieName} releaseDate={releaseDate} starActor={starActor} onChange={this.handleChange} onSubmit={this.handleSubmit} />
      <MovieList movieList={movieList} />
    </section>)
  }
}