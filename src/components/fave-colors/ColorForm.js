import React from 'react';
import PropTypes from 'prop-types'

const ColorForm = ({ color, onChange, onSubmit }) => {


  return (
    <form onSubmit={onSubmit}>
      <label>Add a color to the list: <input type="text" name="color" value={color} onChange={onChange} /></label>
      <button>Add!</button>
    </form>
  )
}

ColorForm.propTypes = {
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default ColorForm;