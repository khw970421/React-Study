import Counter from "./Counter/Counter";
import { useState, useEffect, useCallback } from "react";
import { Container, Title } from "../../../pages/BtnCountPage";

function App() {
  const [totalCount, setTotalCount] = useState(0);
  const func = useCallback(() => {
    console.log(totalCount);
  }, []);
  return (
    <Container>
      <Title>React - TotalCount : {totalCount}</Title>
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
    </Container>
  );
}

export default App;
