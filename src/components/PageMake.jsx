import React from 'react';
import PropTypes from 'prop-types';

import ClickMeButton from './clickMeButton';
import ButtonMaker from './buttonMaker';

export default function PageMake({ count, handelClick, onClickChange }) {
  PageMake.propTypes = {
    count: PropTypes.string.isRequired,
    handelClick: PropTypes.string.isRequired,
    onClickChange: PropTypes.string.isRequired,
  };
  return (
    <div>
      <p>Counter</p>
      <ClickMeButton
        count={count}
        handelClick={handelClick}
      />
      {[1, 2, 3, 4, 5].map((i) => (
        <ButtonMaker
          value={i}
          key={i}
          onClickChange={onClickChange}
        />
      ))}
      <PageMake />
    </div>
  );
}
