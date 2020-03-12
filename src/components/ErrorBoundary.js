import React, { Component } from 'react';

export default class ErrorBoundary extends Component {

  state = {
    error: null
  }

  componentDidCatch(error) {
    this.setState({ error })
  }

  render() {
    const error = this.state.error;
    if(error) return <h1>Oooops! {error.message}</h1>;

    return this.props.children;
  }
}