import React, { useState } from "react";
import MyContext from ".";

export default function Provider({ children }) {
  const [stateA, setStateA] = useState('initialStateA');
  const [stateB, setStateB] = useState('initialStateB');
  const contextValue = {
    stateA,
    setStateA,
    stateB,
    setStateB,
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
}