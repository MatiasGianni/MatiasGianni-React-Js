import React, { useState } from "react";

const useCounter = (initialValue, maxAvailable) => {
  const [count, setCount] = useState(initialValue);

  const incrementar = () => {
    count < maxAvailable && setCount(count + 1);
  };

  const decrementar = () => {
    count > initialValue && setCount(count - 1);
  };

  return {
    count,
    incrementar,
    decrementar,
  };
};

export default useCounter;
