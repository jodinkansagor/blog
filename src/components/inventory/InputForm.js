import React from 'react';
import PropTypes from 'prop-types';

export const InputForm = ({ name, count, onChange, onSubmit }) => (

    <form onSubmit={onSubmit} >
      <label>Inventory Item: <input name="name" type="text" value={name} onChange={onChange} placeholder="What is it?" /></label>
      <label>Inventory Count: <input name="count" type="number" value={count} onChange={onChange} placeholder="How many?" /></label>
      <button>Submit</button>
    </form>
);

InputForm.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

