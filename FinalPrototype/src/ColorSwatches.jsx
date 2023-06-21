import React from 'react';

const ColorSwatches = ({ onColorChange }) => {
  const colorOptions = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff']; // Example color options

  return (
    <div>
      {colorOptions.map((color, index) => (
        <div
          key={index}
          style={{
            backgroundColor: color,
            width: '80px',
            height: '80px',
            margin: '10% auto',
            cursor: 'pointer',
          }}
          onClick={() => onColorChange(color)}
        ></div>
      ))}
    </div>
  );
};

export default ColorSwatches;

