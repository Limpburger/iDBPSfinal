import React, { useState } from 'react'


function ButtonPanel() {
    const [selectedButton, setSelectedButton] = useState(null);
  
    function handleButtonClick(buttonId) {
      setSelectedButton(buttonId);
    }
  
    return (
      <div>
        <button onClick={() => handleButtonClick(1)}>Button 1</button>
        <button onClick={() => handleButtonClick(2)}>Button 2</button>
        <button onClick={() => handleButtonClick(3)}>Button 3</button>
        <button onClick={() => handleButtonClick(4)}>Button 4</button>
        <button onClick={() => handleButtonClick(5)}>Button 5</button>
        {selectedButton && (
          <p>Button {selectedButton} is currently selected</p>
        )}
      </div>
    );
  }

  export default ButtonPanel;

