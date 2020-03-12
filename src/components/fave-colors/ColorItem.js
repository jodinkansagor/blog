import React from 'react';
import PropTypes from 'prop-types';

const ColorItem = ({ color }) => (

  <div style={{ backgroundColor: color, width: '50vw', height: '10vh' }}>
    <h1>{color}</h1>
  </div>
);

ColorItem.propTypes = {
  color: PropTypes.string.isRequired
};

export default ColorItem;