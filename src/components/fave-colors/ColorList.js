import React from 'react';
import PropTypes from 'prop-types';
import ColorItem from './ColorItem';

const ColorList = ({ colorList }) => {
  const colorListElements = colorList.map((color, i) => (
    <li key={i}>
      <ColorItem color={color} />
    </li>
  ))
  console.log(colorListElements)
  
  return (
    <ul>
      {colorListElements}
    </ul>
  )
}

ColorList.propTypes = {
  colorList: PropTypes.arrayOf({
    color: PropTypes.string.isRequired
  })
};

export default ColorList;