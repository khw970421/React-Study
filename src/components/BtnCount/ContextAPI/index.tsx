import React from "react";
import App from "./App";
import { TodoProvider } from "./context/CountContext";

const index = () => {
  return (
    <TodoProvider>
      <App />
    </TodoProvider>
  );
};

export default index;
