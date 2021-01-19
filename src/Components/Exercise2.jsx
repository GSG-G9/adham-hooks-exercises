import React, { useState } from 'react';

export default function Exersice2() {
  const [color, setColor] = useState('white');
  const colors = ['red', 'green', 'blue', 'gray', 'brown', 'yellow'];

  const changeColors = ({ target: { name } }) => {
    setColor(name === 'adham' ? name : name);
  };

  return (
    <div style={{ backgroundColor: color }}>
      <ul>
        {colors.map((color) => (
          <li>
            <button name={color} onClick={changeColors}>
              {color}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
