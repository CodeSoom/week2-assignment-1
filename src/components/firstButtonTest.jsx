import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import ClickMeButton from './clickMeButton';
import ButtonMaker from './buttonMaker';

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);

function App() {
  const [state, setState] = useState({
    count: 0,
    value: 1,
  });

  const { count } = state;
  const { value } = state;

  function handelClick(paraInt) {
    setState({
      value: paraInt,
      count: count + value,
    });
  }
  /*
  아래와 같은 방식들을 사용해보니 값을 변경되었지만
  처음 누를 때는, 초기값 1이 계속 count에 더해지며 두번 클릭한 후에서야 제대로 값이 더해졌습니다.
  이러한 state를 사용할때에는 하나의 값만 사용하는것이 좋은걸까요?
  저는 이런 state가 자바의 객체 class와 비슷하다고 생각하였는데 조금 다른것 같습니다.
  */
  const onClickChange = (i) => setState({ value: i, count: count + i });

  function valueButtonClickEvent(paraInt) {
    setState({
      value: paraInt,
      count: count + value,
    });
  }

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
          onClickChange={valueButtonClickEvent}
        />
      ))}
      {[1, 2, 3, 4, 5].map((i) => (
        <ButtonMaker
          value={i}
          onClickChange={onClickChange(i)}
        />
      ))}
    </div>
  );
}
