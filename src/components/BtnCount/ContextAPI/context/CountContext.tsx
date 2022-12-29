import { createContext, useReducer } from "react";

export const CountContext = createContext({});
export const CountDispatchContext = createContext("");
export const TotalCountContext = createContext(0);
export const TotalCountDispatchContext = createContext("");

const initialState = {
  first: 0,
  second: 0,
  third: 0,
};
const totalCount = 0;

function countReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, [action["key"]]: action["val"] + 1 };
    case "MINUS":
      return { ...state, [action["key"]]: action["val"] - 1 };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function countTotalReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export function TodoProvider({ children }) {
  const [countState, countDispatch] = useReducer(countReducer, initialState);
  const [totalCountState, totalCountDispatch] = useReducer(
    countTotalReducer,
    totalCount
  );
  return (
    <TotalCountContext.Provider value={totalCountState}>
      <TotalCountDispatchContext.Provider value={totalCountDispatch}>
        <CountContext.Provider value={countState}>
          <CountDispatchContext.Provider value={countDispatch}>
            {children}
          </CountDispatchContext.Provider>
        </CountContext.Provider>
      </TotalCountDispatchContext.Provider>
    </TotalCountContext.Provider>
  );
}
