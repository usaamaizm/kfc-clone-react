import React, { useState } from "react";

function App() {
  let [num, setNum] = useState(90);

  function handleIncre() {
    setNum((num = num + 1));
  }

  function handleDecre() {
    setNum((num = num - 1));
  }
  return (
    <>
      <h1>{num}</h1>
      <button disabled={num >= 100 ? true : false} onClick={handleIncre}>
        +
      </button>
      <button onClick={handleDecre} disabled={num <= 85 ? true : false}>
        -
      </button>
    </>
  );
}
export default App;
