// 1. 증감기능
// 2. 부모 컴포넌트에게 메세지 전달 기능

//지역 상태관리
import { useState } from "react";
import { Btn } from "../../../../pages/BtnCountPage";

function Counter({ onIncrease, onDecrease }) {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
    onIncrease(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
    onDecrease(count - 1);
  };

  return (
    <div>
      <span style={{ fontSize: 40 }}>{count}</span>
      <br />
      <Btn onClick={handleIncrease}>+</Btn>
      <Btn onClick={handleDecrease}>-</Btn>
    </div>
  );
}

export default Counter;
