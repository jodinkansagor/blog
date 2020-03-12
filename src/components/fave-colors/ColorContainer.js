import React, { Component } from 'react';
import ColorForm from './ColorForm';
import ColorList from './ColorList';

export default class ColorContainer extends Component {
  state = {
    color: '',
    colorList: []
  }

  onChange = ({ target }) => {
    this.setState({ color: target.value })
  }

  onSubmit = event => {
    event.preventDefault();
    this.setState(state => ({
      colorList: [...state.colorList, state.color]
    }));
  }

  render() {
    const { color, colorList } = this.state
    return <>
      <ColorForm color={color} onChange={this.onChange} onSubmit={this.onSubmit}/>
      <ColorList colorList={colorList} />
    </>
  }
}