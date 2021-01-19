import React, { useState } from 'react';
function Exercise1() {
  const [counter, setCounter] = useState(0);

  const handleCounter = ({ target: { name } }) => {
    setCounter((oldcounter) =>
      name === 'add' ? oldcounter + 1 : oldcounter - 1
    );
  };

  return (
    <div>
      <button onClick={handleCounter} name="add">
        increase
      </button>
      <p>{counter}</p>
      <button onClick={handleCounter} name="sub">
        decrease
      </button>
      <br />
      <button onClick={() => setCounter(0)}>RESET</button>
    </div>
  );
}

export default Exercise1;
