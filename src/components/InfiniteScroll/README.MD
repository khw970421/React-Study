# 무한스크롤

## 동작순서

0. target을 태그에 세팅
1. useEffect가 처음 실행되면서 observer가 등록되고 observer.observe 실행
2. onIntersect에서 조건에 따라 감지를 진행하여 내부 API 호출 코드를 실행
3. 호출 후 받아온 데이터 갱신

## 무한스크롤에서 주의할 점

```JS
setItemLists((itemLists) => [...itemLists, ...res.data]);
```

해당 부분을 아래와 같이 쓰면 정상적으로 동작하지 않는다.

```JS
setItemLists([...itemLists, ...res.data]);
```

> 그 이유는, useEffect에 의해 재정의된 상황은 `target`의 값이 바뀐 상황이므로
> 무한스크롤이 동작하면서는 useEffect 내부 코드가 다시 새롭게 정의되어 다시 실행될 이유가 없다.
> 즉, 그 시기에 기억하고 있는 itemLists는 `setItemLists([...itemLists, ...res.data]);`로 할 경우
> `itemLists`는 무한스크롤로 늘려가도 해당 코드에서는 비어있는 빈배열 상태로 인식할 것이다.

* 우리가 평상시에 상태값이 갱신되게 이벤트가 연결되어 있는 이유는 재렌더링 되면서 함수가 재정의 되어 그때의 상태값을 이전과 다르게 인식하기 때문이다. 
즉, 해당 위의 상황은 무한스크롤 내부 함수가 재정의되는 그런 상황과는 달라 변경된 값을 인식할 수 없다. 

## 마치 이런상황

```js
import Counter from "./components/Counter";
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
```

> useCallback에서 매개변수로 totalCount를 추가하지 않는다면 count를 진행해도 totalCount 출력이 0으로 고정되어 있는 상황과 유사하다고 본다. (주의)
