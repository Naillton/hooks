import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
        <div>Counter: {count}</div>
        <button
          type="button"
          onClick={() => setCount(count + 1)
          }
        >
          Increase Counter
        </button>
      </div>
  );
}