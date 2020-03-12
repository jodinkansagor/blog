import React from 'react';
import PropTypes from 'prop-types';
import { InventoryItem } from './InventoryItem';

export const InventoryList = ({ inventoryList }) => {
  console.log(inventoryList);
  const inventoryListElements = inventoryList.map((item, i) => (
    <li key={i}>
      <InventoryItem item={item} />
    </li>
  ))

  return (
    <ul>
      {inventoryListElements}
    </ul>
  )
};

InventoryList.propTypes = {
  inventoryList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
  })).isRequired
};

