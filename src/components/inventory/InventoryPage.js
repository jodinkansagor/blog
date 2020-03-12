import React, { Component } from 'react';
import { InputForm } from './InputForm';
import { InventoryList } from './InventoryList';

export default class InventoryPage extends Component {
  state = {
    name: '',
    count: 0,
    inventoryList: []
  }

  handleChange = ({ target }) => {
    if(target.name === 'count') return this.setState({ count: Number(target.value) })
    this.setState({ name: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState(state => ({
      inventoryList: [...state.inventoryList, {
        name: state.name,
        count: state.count
      }]
    }));
  }

  render() {
    const { name, count, inventoryList } = this.state
    return (
    <>
      <InputForm 
        name={name} 
        count={count} 
        onChange={this.handleChange} 
        onSubmit={this.handleSubmit} 
      />
      <InventoryList inventoryList={inventoryList}/>
    </>
    );
  }
};
