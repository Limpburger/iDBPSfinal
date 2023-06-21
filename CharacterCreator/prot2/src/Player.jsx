import React, {useState} from "react";
import './player.css';
//import hair1 from './img/hair1.svg';
//import {ReactComponent as hair2} from './img/hair1.svg';
//import {ReactComponent as hair3} from './img/hair1.svg';

// import head1 from './img/head1.svg';
// import head2 from './img/head2.svg';
// import head3 from './img/head3.svg';

//import { ChromePicker } from 'react-color';

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




import { ReactComponent as hair1 } from './img/hair1.svg';
import { ReactComponent as hair2 } from './img/hair2.svg';
import { ReactComponent as hair3 } from './img/hair3.svg';
import { ReactComponent as hair4 } from './img/hair4.svg';

import { ReactComponent as eyes1 } from './img/fullEyes1.svg';
import { ReactComponent as eyes2 } from './img/fullEyes2.svg';
import { ReactComponent as eyes3 } from './img/fullEyes3.svg';

import { ReactComponent as mouth1 } from './img/fullMouth1.svg';
import { ReactComponent as mouth2 } from './img/fullMouth2.svg';
import { ReactComponent as mouth3 } from './img/fullMouth3.svg';

import { ReactComponent as shirt1 } from './img/shirt1.svg';





//import mySVGImage from './img/head1.svg';


import { saveAs } from 'file-saver';


// const headArray = [head1, head2, head3];
// const eyesArray = [eyes1, eyes2, eyes3];
// const mouthArray = [mouth1, mouth2, mouth3];
// const hairArray = [hair1, hair2, hair3, hair4]

// const shirtArray = [shirt1, chest1, shirt1];

// const pantsArray = [pants1]
// const shoesArray = [shoes1]


// function ColorPicker() {
//     const [color, setColor] = useState('#ffffff');
  
//     const handleChange = (color) => {
//       setColor(color.hex);
//     };
//     return (
//         <div>
//           <ChromePicker color={color} onChange={handleChange} />
//           <button onClick={() => console.log(color)}>Save Color</button>
//         </div>
//       );
//     }

//     function SVG({ color }) {
//         return (
//           <svg width="100" height="100">
//             <rect x="10" y="10" width="80" height="80" fill={color} />
//           </svg>
//         );
//       }

//       function App() {
//         const [color, setColor] = useState('#ffffff');
      
//         const handleColorChange = (color) => {
//           setColor(color.hex);
//         };
      
//         return (
//           <div>
//             <ColorPicker onChange={handleColorChange} />
//             <SVG color={color} />
//           </div>
//         );
//       }


function CharacterCreator(){
    // const headOptions = [head1,head2, head3];
    // const eyesOptions = [eyes1, eyes2, eyes3];
    // // const shirtOptions = ['shirt1.svg','shirt2.svg','shirt3.svg'];
    // // const legsOptions = ['legs1.svg','legs2.svg','legs3.svg'];

    // const [ head, setHead] = useState(headOptions[0]);
    // const [ eyes, setEyes] = useState(eyesOptions[0]);
    // // const [ shirt, setShirt] = useState(shirtOptions[0]);
    // // const [ legs, setLegs] = useState(legsOptions[0]);
    // console.log(head);

    // const nextHead = () => {
    //     const currentIndex = headOptions.indexOf(head);
    //     const nextIndex = (currentIndex+ 1) % headOptions.length;
    //     setHead(headOptions[nextIndex]);
    // };

    // const nextEyes = () => {
    //     const currentIndex = eyesOptions.indexOf(eyes);
    //     const nextIndex = (currentIndex+ 1) % eyesOptions.length;
    //     setEyes(eyesOptions[nextIndex]);
    // };

    // const nextShirt = () => {
    //     const currentIndex = shirtOptions.indexOf(shirt);
    //     const nextIndex = (currentIndex+ 1) % shirtOptions.length;
    //     setShirt(shirtOptions[nextIndex]);
    // };

    // const nextLegs = () => {
    //     const currentIndex = legsOptions.indexOf(legs);
    //     const nextIndex = (currentIndex+ 1) % legsOptions.length;
    //     setLegs(legsOptions[nextIndex]);
    // };

    // render() {
    //     const CurrentSVG = svgArray[currentSVGIndex];
      
    //     return (
    //       <div>
    //         <CurrentSVG />
    //         <button onClick={() => setCurrentSVGIndex((currentSVGIndex + 1) % svgArray.length)}>
    //           Next SVG
    //         </button>
    //       </div>
    //     );
    //   }



  
    const headArray = [head1, head2, head3];
    const chestArray = [chest1, chest2, chest3];
    const legsArray = [legs1, legs2, legs3];
    const shoesArray = [shoes1, shoes2, shoes3];



    const [currentHeadIndex, setCurrentHeadIndex] = useState(0);
    const [currentChestIndex, setCurrentChestIndex] = useState(0);
    const [currentLegsIndex, setCurrentLegsIndex] = useState(0);
    const [currentShoesIndex, setCurrentShoesIndex] = useState(0);

  
    const CurrentHead = headArray[currentHeadIndex];
    const CurrentChest = chestArray[currentChestIndex];
    const CurrentLegs = legsArray[currentLegsIndex];
    const CurrentShoes = shoesArray[currentShoesIndex];


    // const [currentHairIndex, setCurrentHairIndex] = useState(0);
    // const [currentEyesIndex, setCurrentEyesIndex] = useState(0);
    // const [currentMouthIndex, setCurrentMouthIndex] = useState(0);

    // const eyesArray = [eyes1, eyes2, eyes3];
    // const mouthArray = [mouth1, mouth2, mouth3];
    // const hairArray = [hair1, hair2, hair3, hair4];

    // const CurrentHair = hairArray[currentHairIndex];
    // const CurrentEyes = eyesArray[currentEyesIndex];
    // const CurrentMouth = mouthArray[currentMouthIndex];

  
    const [currentCharacter, setCurrentCharacter] = useState(null);



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


                
                {/* <button onClick={() => setCurrentHairIndex((currentHairIndex + 1) % hairArray.length)}>hair</button> */}
                    {/* <button onClick={nextHead}>Next</button> */}
                {/* <button onClick={() => setCurrentEyesIndex((currentEyesIndex + 1) % eyesArray.length)}>eyes</button>
                <button onClick={() => setCurrentMouthIndex((currentMouthIndex + 1) % mouthArray.length)}>mouth</button> */}





                <button onClick={saveSvg}> Save SVG </button>
                <button onClick={handleSave}> SaveER</button>
                <button onClick={handleSaveSvg}> handleSave </button>
                <button onClick={displaySvg}> Display </button>
                </div>
            </div>
            

            {/* <img src={head}  alt="My SVG Image" /> */}

            {/* <img src={head} alt="My SVG Image" /> */}
            {/* <img src={head} alt="My SVG Image" /> */}

            {/* <svg viewBox="0 0 100 100" xmlns='./img/head1.svg'>
  <circle cx="50" cy="50" r="50" />
</svg> */}



            {/* <div className="body-part" id="shirt">
                <svg width="100" height="100">
                    <image xlinkHref="{shirt}" width="100" height="100" />
                </svg>
                <div className="controls">
                    <button onClick={nextShirt}>Next</button>
                </div>
            </div>

            <div className="body-part" id="legs">
                <svg width="100" height="100">
                    <image xlinkHref="{legs}" width="100" height="100" />
                </svg>
                <div className="controls">
                    <button onClick={nextLegs}>Next</button>
                </div>
            </div> */}
        </div>
    );
}



export default CharacterCreator;