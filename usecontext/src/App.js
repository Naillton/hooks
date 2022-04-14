import React, { useContext } from "react";
import MyContext from "./context";

export default function App() {
  const { stateA, setStateA, setStateB, stateB } = useContext(MyContext);
  return (
    <div>
      <p>{stateA}</p>
      <p>{stateB}</p>
      <button onClick={() => setStateA("newState")}>Change A</button>
      <button onClick={() => setStateB("newState")}>Change B</button>
    </div>
  );
}