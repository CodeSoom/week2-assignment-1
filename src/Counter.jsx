import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

export default function Counter({ count, increaseCount }) {
  const steps = [1, 2, 3, 4, 5];

  return (
    <p>
      <h1>Counter</h1>

      <p>
        <Button
          value={`Click me! (${count})`}
          onClick={() => increaseCount(1)}
        />
      </p>

      {steps.map((step) => (
        <Button
          key={step}
          value={step}
          onClick={() => increaseCount(step)}
        />
      ))}
    </p>
  );
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increaseCount: PropTypes.func.isRequired,
};
