// 1. 증감기능
// 2. 부모 컴포넌트에게 메세지 전달 기능

//지역 상태관리
import { useState } from "react";
import { Btn } from "../../../../pages/BtnCountPage";

function Counter({ onIncrease, onDecrease, val }) {
  return (
    <div>
      <span style={{ fontSize: 40 }}>{val}</span>
      <br />
      <Btn onClick={onIncrease}>+</Btn>
      <Btn onClick={onDecrease}>-</Btn>
    </div>
  );
}

export default Counter;
