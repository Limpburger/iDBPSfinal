import React, {useEffect, useState, useRef} from "react";
import './player.css';
//import hair1 from './img/hair1.svg';
//import {ReactComponent as hair2} from './img/hair1.svg';
//import {ReactComponent as hair3} from './img/hair1.svg';

// import head1 from './img/head1.svg';
// import head2 from './img/head2.svg';
// import head3 from './img/head3.svg';

//import { ChromePicker } from 'react-color';
//import { SVG, extend as SVGextend, Element as SVGElement } from '@svgdotjs/svg.js'
import SVG from "svg.js";

import { ReactComponent as head1 } from './img/head1.svg';
import { ReactComponent as head2 } from './img/head2.svg';
import { ReactComponent as head3 } from './img/head3.svg';

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

import { ReactComponent as chest1 } from './img/chest1.svg';

import { ReactComponent as pants1 } from './img/pants1.svg';

import { ReactComponent as shoes1 } from './img/shoes1.svg';


//import mySVGImage from './img/head1.svg';

const headArray = [head1, head2, head3];
const eyesArray = [eyes1, eyes2, eyes3];
const mouthArray = [mouth1, mouth2, mouth3];
const hairArray = [hair1, hair2, hair3, hair4]

const shirtArray = [shirt1, chest1, shirt1];

const pantsArray = [pants1]
const shoesArray = [shoes1]


// const svgFiles = [
//     './img/head1.svg',
//     './img/hair1.svg',
//     './img/shirt1.svg',
// ]


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

const svgContainer = SVG().size(100,100);
const rect = svgContainer.rect(50,50)


function CombinedSVG({svgFiles = []}){

    //svgFiles = [head1, head2, head3]

    const [combinedSVGString, setCombinedSVGString] = useState("");
    const svgContainerRef = useRef(null);

    useEffect(() => {
        const svgContainer = SVG().addTo(svgContainerRef.current);
        // const svgContainer = SVG().size(100,100);
        // const rect = svgContainer.rect(50,50)
        // svgContainer.add(rect);

        rect.on("render", function(){
            svgContainer.add(rect);
        });

        const combinedSVG = svgContainer.group();

        const mySVGFiles = [
            './img/head1.svg',
            './img/hair1.svg',
            './img/shirt1.svg',
        ];

        mySVGFiles.forEach((svgFile) => {
            SVG(svgFile).each(function () {
                combinedSVG.add(this);
            });
        });

        svgFiles.forEach((svgFile) => {
            SVG(svgFile).each(function () {
                combinedSVG.add(this);
            });
        });
        setCombinedSVGString(combinedSVG.svg());
    
        // combinedSVG.svg().then((svgString) => {
        //     setCombinedSVGString(svgString);
        // });
    }, [svgFiles]);
    return(

        <div ref={svgContainerRef}>
           <svg dangerouslySetInnerHTML= {{ __html: combinedSVGString}}/>
        </div>
    );
}


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






      
    const [currentHeadIndex, setCurrentHeadIndex] = useState(0);
    const CurrentHead = headArray[currentHeadIndex];

    const [currentHairIndex, setCurrentHairIndex] = useState(0);
    const CurrentHair = hairArray[currentHairIndex];

    const [currentEyesIndex, setCurrentEyesIndex] = useState(0);
    const CurrentEyes = eyesArray[currentEyesIndex];

    const [currentMouthIndex, setCurrentMouthIndex] = useState(0);
    const CurrentMouth = mouthArray[currentMouthIndex];

    const [currentShirtIndex, setCurrentShirtIndex] = useState(0);
    const CurrentShirt = shirtArray[currentShirtIndex];

    const [currentPantsIndex, setCurrentPantsIndex] = useState(0);
    const CurrentPants = pantsArray[currentPantsIndex];

    const [currentShoesIndex, setCurrentShoesIndex] = useState(0);
    const CurrentShoes = shoesArray[currentShoesIndex];




    return(
        
        <div className="character-creator">
            <div className="body-part">
                <div id="head">
                    <svg width="600" height="1000">
                        <CurrentShirt/>
                        <CurrentHead />
                        <CurrentHair/>
                        <CurrentEyes />
                        <CurrentMouth/>
                        <CurrentPants/>
                        <CurrentShoes/>
                    </svg>
                </div>


                <div className="controls">
                <button onClick={() => setCurrentHeadIndex((currentHeadIndex + 1) % headArray.length)}>head</button>
                <button onClick={() => setCurrentHairIndex((currentHairIndex + 1) % hairArray.length)}>hair</button>
                    {/* <button onClick={nextHead}>Next</button> */}
                <button onClick={() => setCurrentEyesIndex((currentEyesIndex + 1) % eyesArray.length)}>eyes</button>
                <button onClick={() => setCurrentMouthIndex((currentMouthIndex + 1) % mouthArray.length)}>mouth</button>
                <button onClick={() => setCurrentShirtIndex((currentShirtIndex + 1) % shirtArray.length)}>chest</button>

                <button onClick={() => setCurrentPantsIndex((currentPantsIndex + 1) % pantsArray.length)}>pants</button>
                <button onClick={() => setCurrentShoesIndex((currentShoesIndex + 1) % shoesArray.length)}>shoes</button>

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



export default CombinedSVG;