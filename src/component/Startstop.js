import React, { useState } from "react";

const Startstop = () => {
  const [count, setCount] = useState(0);
  const startcount = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      Startstop counter={count}
      <button onClick={startcount}>Start Counter</button>
      <button onClick={()=>{setCount(0)}}>Stop Counter</button>
    </div>
  );
};

export default Startstop;
