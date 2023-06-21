import React, {useState} from "react";
import './avatar.css';

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


function CharacterCreator(){
    const headArray = [head1, head2, head3];
    const chestArray = [chest1, chest2, chest3];
    const legsArray = [legs1, legs2, legs3];
    const shoesArray = [shoes1, shoes2, shoes3];

    //charcustom
    //const [customizeChar, setCustomizeChar] = useState(false);

    const [currentHeadIndex, setCurrentHeadIndex] = useState(0);
    const [currentChestIndex, setCurrentChestIndex] = useState(0);
    const [currentLegsIndex, setCurrentLegsIndex] = useState(0);
    const [currentShoesIndex, setCurrentShoesIndex] = useState(0);

  
    const CurrentHead = headArray[currentHeadIndex];
    const CurrentChest = chestArray[currentChestIndex];
    const CurrentLegs = legsArray[currentLegsIndex];
    const CurrentShoes = shoesArray[currentShoesIndex];

    const [currentCharacter, setCurrentCharacter] = useState(null);
    const [isAvatarVisible, setIsAvatarVisible] = useState(true);



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
    link.download = "combined.svg";
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


  const handleSaveSvg = () => {
    // Combine the SVG elements
    const svgElements = document.querySelectorAll(".body-part svg");
    const combinedSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    combinedSvg.setAttribute("width", "650");
    combinedSvg.setAttribute("height", "1200");
    svgElements.forEach((el) => {
        combinedSvg.appendChild(el.cloneNode(true));
    });
    
    // Convert the combined SVG to a string
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(combinedSvg);
    
    // Set the combined SVG as the innerHTML of a new element
    const svgContainer = document.createElement("div");
    svgContainer.innerHTML = svgString;
    document.body.appendChild(svgContainer);
};

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


  console.log(currentHeadIndex, currentChestIndex, currentLegsIndex, currentShoesIndex, currentCharacter);

    return(
        
        <div className="character-creator">
            <div className="body-part">
                <div id="head">
                    <svg width="100%" height="100%">
                        <CurrentChest/>
                        <CurrentHead />
                        <CurrentLegs/>
                        <CurrentShoes/>
                    </svg>
                </div>


                <div className="controls">
                <button onClick={() => setCurrentHeadIndex((currentHeadIndex + 1) % headArray.length)}>head</button>
                <button onClick={() => setCurrentChestIndex((currentChestIndex + 1) % chestArray.length)}>chest</button>
                <button onClick={() => setCurrentLegsIndex((currentLegsIndex + 1) % legsArray.length)}>legs</button>
                <button onClick={() => setCurrentShoesIndex((currentShoesIndex + 1) % shoesArray.length)}>shoes</button>


                <button onClick={saveSvg}> Save SVG </button>
                <button onClick={handleSave}> SaveER</button>
                <button onClick={handleSaveSvg}> handleSave </button>
                <button onClick={displaySvg}> Display </button>
                </div>
            </div>
        </div>
    );
}



export default CharacterCreator;