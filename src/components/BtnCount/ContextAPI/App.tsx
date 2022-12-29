import { useContext } from "react";
import {
  CountContext,
  CountDispatchContext,
  TotalCountContext,
  TotalCountDispatchContext,
} from "./context/CountContext";
import { Container, Title } from "../../../pages/BtnCountPage";
import Counter from "./components/Counter";

const App = () => {
  const { first, second, third } = useContext(CountContext);
  const totalCount = useContext(TotalCountContext);
  const countDispatch = useContext(CountDispatchContext);
  const totalCountDispatch = useContext(TotalCountDispatchContext);

  const handleIncrease = (val, key) => {
    countDispatch({ type: "ADD", val, key });
    totalCountDispatch({ type: "ADD" });
  };

  const handleDecrease = (val, key) => {
    countDispatch({ type: "MINUS", val, key });
    totalCountDispatch({ type: "MINUS" });
  };

  return (
    <Container>
      <Title>Redux - TotalCount : {totalCount}</Title>
      <Counter
        onIncrease={() => handleIncrease(first, "first")}
        onDecrease={() => handleDecrease(first, "first")}
        val={first}
      ></Counter>
      <Counter
        onIncrease={() => handleIncrease(second, "second")}
        onDecrease={() => handleDecrease(second, "second")}
        val={second}
      ></Counter>
      <Counter
        onIncrease={() => handleIncrease(third, "third")}
        onDecrease={() => handleDecrease(third, "third")}
        val={third}
      ></Counter>
    </Container>
  );
};

export default App;
