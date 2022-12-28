import Counter from "./Counter/Counter";
import { useState, useEffect, useCallback } from "react";

function App() {
  const [totalCount, setTotalCount] = useState(0);
  const func = useCallback(() => {
    console.log(totalCount);
  }, []);
  return (
    <div>
      TotalCount : {totalCount}
      <Counter
        onIncrease={() => {
          setTotalCount(totalCount + 1);
          func();
        }}
        onDecrease={() => {
          setTotalCount(totalCount - 1);
          func();
        }}
      ></Counter>
      <Counter
        onIncrease={() => {
          setTotalCount(totalCount + 1);
          func();
        }}
        onDecrease={() => {
          setTotalCount(totalCount - 1);
          func();
        }}
      ></Counter>
      <Counter
        onIncrease={() => {
          setTotalCount(totalCount + 1);
          func();
        }}
        onDecrease={() => {
          setTotalCount(totalCount - 1);
          func();
        }}
      ></Counter>
    </div>
  );
}

export default App;
