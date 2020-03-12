import React from 'react';
import PropTypes from 'prop-types';

export const InventoryItem = ({ item }) => (

  <>
    <h1>{item.name}</h1>
    <h2>{item.count}</h2>
  </>
);

InventoryItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
  })
};
