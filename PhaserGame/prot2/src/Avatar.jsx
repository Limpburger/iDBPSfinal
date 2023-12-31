import React, {useState, useRef} from "react";
import './App.css';

import { ReactComponent as head1 } from './img/head1.svg';
import { ReactComponent as head2 } from './img/head2.svg';
import { ReactComponent as head3 } from './img/head3.svg';

import { ReactComponent as chest1 } from './img/chest1.svg';
import { ReactComponent as chest2 } from './img/chest2.svg';
import { ReactComponent as chest3 } from './img/chest3.svg';

import { ReactComponent as legs1 } from './img/legs1.svg';
import { ReactComponent as legs2 } from './img/legs2.svg';
import { ReactComponent as legs3 } from './img/legs3.svg';

import { ReactComponent as shoes1 } from './img/shoes1.svg';
import { ReactComponent as shoes2 } from './img/shoes2.svg';
import { ReactComponent as shoes3 } from './img/shoes3.svg';

import { saveAs } from 'file-saver';

import okok from './img/index.js';
import { ChromePicker } from 'react-color';




function CharacterCreator(){
  const characterParts = {
    head: [head1, head3, head2],
    chest: [chest1, chest3, chest2],
    legs: [legs1, legs3, legs2],
    shoes: [shoes1, shoes3, shoes2],
  };
  

  const [currentCharacter, setCurrentCharacter] = useState({
    headIndex: 0,
    chestIndex: 0,
    legsIndex: 0,
    shoesIndex: 0,
  });
  

  
  const { headIndex, chestIndex, legsIndex, shoesIndex } = currentCharacter;
  const CurrentHead = characterParts.head[headIndex];
  const CurrentChest = characterParts.chest[chestIndex];
  const CurrentLegs = characterParts.legs[legsIndex];
  const CurrentShoes = characterParts.shoes[shoesIndex];
  

    // Define the color options
const colors = [
  '#FF0000', // red
  '#00FF00', // green
  '#0000FF', // blue
];

const [selectedColor, setSelectedColor] = useState(colors[0]);

// Component for each color option
const ColorOption = ({ color, setSelectedColor }) => {
  const handleClick = () => {
    setSelectedColor(color);
  };

  return (
    <div
      style={{ backgroundColor: color, width: '50px', height: '50px' }}
      onClick={handleClick}
    />
  );
};

// Component for the SVG that changes color
const SVG = ({ selectedColor }) => {
  const handleClick = (event) => {
    event.target.setAttribute('fill', selectedColor);
  };

  return (
//     <div id="svgContainer">
//     <svg width="100%" height="auto">
//         <CurrentChest onClick={handleClick}/>
//         <CurrentHead onClick={handleClick} />
//         <CurrentLegs onClick={handleClick}/>
//         <CurrentShoes onClick={handleClick}/>
//     </svg>
// </div>


    <svg width="100px" height="100px">
      <rect x="10px" y="10px" width="80px" height="80px" onClick={handleClick} />
    </svg>
  );
};


///save
function saveSvg() {
    // Get the SVG elements
    const svgElements = document.querySelectorAll("svg");
  
    // Create a new SVG element to hold the combined contents
    const combinedSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  
    // Set the attributes for the new SVG element
    combinedSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    combinedSvg.setAttribute("width", "700");
    combinedSvg.setAttribute("height", "1000");
  
    // Loop through each SVG element and append its contents to the combined SVG
    svgElements.forEach(svg => {
      const svgChildren = svg.children;
      for (let i = 0; i < svgChildren.length; i++) {
        combinedSvg.appendChild(svgChildren[i].cloneNode(true));
      }
    });
  
    // Convert the combined SVG to a string
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(combinedSvg);
  
    // Create a new blob with the SVG string
    const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
  
    // Create a download link and click it to trigger the download
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "player.svg";
    link.click();
  }

function handleSave() {
    const svgElements = document.querySelectorAll("svg");
  
    // Create a new SVG element to hold the combined contents
    const combinedSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  
    // Set the attributes for the new SVG element
    combinedSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    combinedSvg.setAttribute("width", "650");
    combinedSvg.setAttribute("height", "1000");
  
    // Loop through each SVG element and append its contents to the combined SVG
    svgElements.forEach(svg => {
      const svgChildren = svg.children;
      for (let i = 0; i < svgChildren.length; i++) {
        combinedSvg.appendChild(svgChildren[i].cloneNode(true));
      }
    });
  

    const svgString = new XMLSerializer().serializeToString(combinedSvg);
    const blob = new Blob([svgString], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
  
    const link = document.createElement("a");
    link.download = "combined.svg";
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  function displaySvg() {
    const svgElements = document.querySelectorAll("svg");
  
    // Create a new SVG element to hold the combined contents
    const combinedSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  
    // Set the attributes for the new SVG element
    combinedSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    combinedSvg.setAttribute("width", "650");
    combinedSvg.setAttribute("height", "1200");
  
    // Loop through each SVG element and append its contents to the combined SVG
    svgElements.forEach(svg => {
      const svgChildren = svg.children;
      for (let i = 0; i < svgChildren.length; i++) {
        combinedSvg.appendChild(svgChildren[i].cloneNode(true));
      }
    });
  

    const svgString = new XMLSerializer().serializeToString(combinedSvg);
    const blob = new Blob([svgString], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
  
    const img = document.createElement("img");
    img.src = url;
    document.body.appendChild(img);
    URL.revokeObjectURL(url);
  }

  function DrawingArea() {
    const [color, setColor] = useState('#000000');
    const [showColorPicker, setShowColorPicker] = useState(false);
  
    function handleDrawingClick(event) {
      event.target.style.fill = color;
  }

  function handleColorChange(newColor) {
      setColor(newColor.hex);
  }

  function handleColorPickerClose() {
      setShowColorPicker(false);
  }
  
    return (
      <div id="svgContainer">
        <svg id="drawing" onClick={handleDrawingClick}>
          <CurrentChest/>
          <CurrentHead />
          <CurrentLegs/>
          <CurrentShoes/>
        </svg>
        <div className="colorPicker">
                <button onClick={() => setShowColorPicker(!showColorPicker)}>Choose a color</button>
                {showColorPicker ? (
                    <ChromePicker color={color} onChange={handleColorChange} onClose={handleColorPickerClose} />
                ) : null}
            </div>
      </div>
    );
  }
  
    return(
        
        <div className="character-creator">
            <div className="grid-controls">
            <button className="grid-item" onClick={() => setCurrentCharacter((prevCharacter) => ({
  ...prevCharacter,
  headIndex: (prevCharacter.headIndex + 1) % characterParts.head.length,
}))}>
  head
</button>
<button className="grid-item" onClick={() => setCurrentCharacter((prevCharacter) => ({
  ...prevCharacter,
  chestIndex: (prevCharacter.chestIndex + 1) % characterParts.chest.length,
}))}>
  chest
</button>
<button className="grid-item" onClick={() => setCurrentCharacter((prevCharacter) => ({
  ...prevCharacter,
  legsIndex: (prevCharacter.legsIndex + 1) % characterParts.legs.length,
}))}>
  legs
</button>
<button className="grid-item" onClick={() => setCurrentCharacter((prevCharacter) => ({
  ...prevCharacter,
  shoesIndex: (prevCharacter.shoesIndex + 1) % characterParts.shoes.length,
}))}>
  shoes
</button>

                <button className="grid-item" onClick={saveSvg}> Save SVG </button>
                <button className="grid-item" onClick={handleSave}> handleSAve</button>
                <button className="grid-item" onClick={displaySvg}> Display </button>
                </div>
                
            <DrawingArea/>



            {/* <div className="drawArea">
                  <svg width="100%" height="auto">
                    <DrawingArea/>
                  </svg>
                </div> */}

            {/* <div className="color-controls">
            <form role="toolbar">
  <label>Drawing:
    <select id="select-drawing">
      <option src='./img/head1.svg'/>Rabbit &amp; box turtle
      <option src='./img/head1.svg'/>Mandrills
      <option value='./img/head1.svg'/>Painted bunting

    </select>
  </label>

  <label>Color:
    <input type="color" value="#11bb33" id="select-color"/>
  </label>
</form>
<output id="drawing">
<svg width="100%" height="auto" >
                    <CurrentChest/>
                    <CurrentHead />
                    <CurrentLegs/>
                    <CurrentShoes/>
                </svg>
</output>

            </div> */}


            {/* <div>
      <okok.head1 style={{ color: 'purple' }} />
      <okok.head2 style={{ color: 'purple' }} />
      <okok.head3 style={{ color: 'purple' }} />
    </div> */}


            {/* <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {colors.map((color) => (
          <ColorOption key={color} color={color} setSelectedColor={setSelectedColor} />
        ))}
      </div>
      <SVG selectedColor={selectedColor} />
      <CurrentChest selectedColor={selectedColor} />
                    <CurrentHead selectedColor={selectedColor} />
                    <CurrentLegs selectedColor={selectedColor} />
                    <CurrentShoes selectedColor={selectedColor} />
    </div> */}














        </div>
    );
}



export default CharacterCreator;