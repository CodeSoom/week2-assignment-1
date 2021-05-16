import React from 'react';
import PropTypes from 'prop-types';

export default function ButtonMaker({ value, onClickChange }) {
  ButtonMaker.propTypes = {
    value: PropTypes.string.isRequired,
    onClickChange: PropTypes.string.isRequired,
  };

  return (
    <button type="button" onClick={() => onClickChange(value)}>
      {value}
    </button>
  );
}
