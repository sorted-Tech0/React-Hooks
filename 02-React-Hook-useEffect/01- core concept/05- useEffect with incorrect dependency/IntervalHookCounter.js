import React, { useState, useEffect } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  // one way-> either use below one and move into useEffect scope and give the "count" dependency or
  //   const tick = () => {
  //     setCount(count + 1);
  //   };

  // or write like below one without giving to the dependency

  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{count}</div>;
}

export default IntervalHookCounter;
