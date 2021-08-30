import React, { useState } from "react";

function HookCounterTwo() {
  let initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const increamentFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      count: {count}
      <div>
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Increase
        </button>
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>
          Decrease
        </button>
        {/* <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button> */}
        <button onClick={increamentFive}>Increament by 5</button>
      </div>
    </div>
  );
}

export default HookCounterTwo;
