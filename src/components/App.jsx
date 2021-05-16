import React, { useState } from 'react';

import PageMake from './PageMake';

export default function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handelClick() {
    setState({
      count: count + 1,
    });
  }

  const onClickChange = (i) => setState({ count: count + i });

  return (
    <div>
      <PageMake
        count={count}
        handelClick={handelClick}
        onClickChange={onClickChange}
      />
    </div>
  );
}
