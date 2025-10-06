import React, { createContext, useReducer } from "react";

export const MyContext = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
};

function ContextReducer(props) {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <MyContext.Provider value={[count, dispatch]}>
      {props.children}
    </MyContext.Provider>
  );
}

export default ContextReducer;
