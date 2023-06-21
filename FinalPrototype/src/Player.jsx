import React, { useState, useEffect, useRef } from 'react';

import ColorSwatches from './ColorSwatches';

import {ReactComponent as Head1} from './img/head1.svg';
import {ReactComponent as Head2} from './img/head2.svg';
import {ReactComponent as Head3} from './img/head3.svg';

import {ReactComponent as Chest1} from './img/chest1.svg';
import {ReactComponent as Chest2} from './img/chest2.svg';
import {ReactComponent as Chest3} from './img/chest3.svg';

import {ReactComponent as Legs1} from './img/legs1.svg';
import {ReactComponent as Legs2} from './img/legs2.svg';
import {ReactComponent as Legs3} from './img/legs3.svg';

import {ReactComponent as Shoes2} from './img/shoes2.svg';
import {ReactComponent as Shoes3} from './img/shoes3.svg';
import {ReactComponent as Shoes1} from './img/shoes1.svg';


import './App.css';
import { ReactComponent as HeadOption1 } from './img/head1Man.svg';
import { ReactComponent as HeadOption2 } from './img/head2Man.svg';
import { ReactComponent as HeadOption3 } from './img/head3Vrouw.svg';

import { ReactComponent as ChestOption1 } from './img/chest1-cropped.svg';
import { ReactComponent as ChestOption2 } from './img/chest2-cropped.svg';
import { ReactComponent as ChestOption3 } from './img/chest3-cropped.svg';

import { ReactComponent as LegsOption1 } from './img/legs1-cropped.svg';
import { ReactComponent as LegsOption2 } from './img/legs2-cropped.svg';
import { ReactComponent as LegsOption3 } from './img/legs3-cropped.svg';

import { ReactComponent as ShoesOption1 } from './img/shoes1-cropped.svg';
import { ReactComponent as ShoesOption2 } from './img/shoes2-cropped.svg';
import { ReactComponent as ShoesOption3 } from './img/shoes3-cropped.svg';

import axios from 'axios';

const Player = ({  }) => {
  const desiredWidth = 65 * 4;
  const desiredHeight = 100 * 4;
  const originalWidth = 650;
  const originalHeight = 1100;
  const widthScalingFactor = desiredWidth / originalWidth;
  const heightScalingFactor = desiredHeight / originalHeight;

  const scaledWidth = originalWidth * widthScalingFactor;
  const scaledHeight = originalHeight * heightScalingFactor;
  const [selectedColor, setSelectedColor] = useState('#000000');


  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const [rectangleColor, setRectangleColor] = useState('#000000');
  const [newTarget, setTargetArea] = useState(null);
  const svgContainerRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [shapeArray, setShapeArray] = useState(['cls-1']);

  const saveSvgToDatabase = async () => {
    const svgElement = document.querySelector('.avatar');
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svgElement);
    
    try {
      // Send the SVG string to your server using Axios
      const response = await axios.post('/save-svg', { svgString });

      // Handle the response from the server
      // You can display a success message or perform any other actions here
      console.log('SVG saved successfully:', response.data);
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error('Error saving SVG:', error);
    }
  };
  

  // Add a useEffect hook to update the player position when the window is resized
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      console.log(screenWidth)

      // Calculate the new position of the player
      const newX = (screenWidth) / 4;
      const newY = (screenHeight) / 6;

      // Update the player position
      setPosition({ x: newX, y: newY });
    };

    // Attach the event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call the handleResize function initially to set the initial player position
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [scaledWidth, scaledHeight]);




  const characterParts = {
    head: [Head1, Head2, Head3],
    chest: [Chest1, Chest2, Chest3],
    legs: [Legs1, Legs2, Legs3],
    shoes:[Shoes1, Shoes2, Shoes3],
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

  //currenthead is een render van head1, bevat geen pupils class.


  console.log(CurrentHead)







//coloring
function handleDrawingClick(event) {
  setTargetArea(selectedColor);
  console.log(event.target.getAttribute('id'));
  console.log(event.target.getAttribute('class'));

  const targetId = event.target.getAttribute('class');

  if (activeTab === 'head') {
   if(headIndex === 0){
    setShapeArray(['cls-14', 'cls-8']);
   }else if(headIndex === 1){
    setShapeArray(['cls-17', 'cls-18']);
   }
   else{
    setShapeArray(['cls-14', 'cls-8']);
   }

    if (shapeArray.includes(targetId)) {
      const elements = document.getElementsByClassName(targetId);
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.fill = selectedColor;
      }
    }
  }
  if (activeTab === 'chest') {
    const shapeArray = ['cls-10', 'cls-3', 'cls-18'];
    if (shapeArray.includes(targetId)) {
      const elements = document.getElementsByClassName(targetId);
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.fill = selectedColor;
      }
    }
  }
  if (activeTab === 'legs') {
    const shapeArray = ['cls-9', 'cls-16'];
    if (shapeArray.includes(targetId)) {
      const elements = document.getElementsByClassName(targetId);
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.fill = selectedColor;
      }
    }
  }
  if (activeTab === 'shoes') {
    const shapeArray = ['cls-5', 'cls-6', 'cls-15'];
    if (shapeArray.includes(targetId)) {
      const elements = document.getElementsByClassName(targetId);
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.fill = selectedColor;
      }
    }
  }
}

function isElementInActiveTabContainer(element) {
  const activeTabContainer = document.getElementById(activeTab + '-container');
  return activeTabContainer.contains(element);
}


    //tab buttons
    const [activeTab, setActiveTab] = useState('head');
    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
  

  const handleRectangleClick = () => {
    setRectangleColor(selectedColor);
  };


  //eye anim
  useEffect(() => {
    const svgContainer = svgContainerRef.current;
    const pupils = svgContainer.querySelectorAll('.pupils');

    const eyeCenterX = [110, 200];
    const eyeCenterY = 100;
    const eyeMidpointX = (eyeCenterX[0] + eyeCenterX[1]) / 2;
    const eyeMidpointY = eyeCenterY;
    const gravitateThreshold = 100;

    const handleMouseMove = (event) => {
      const containerRect = svgContainer.getBoundingClientRect();
      const mouseX = event.clientX - containerRect.left;
      const mouseY = event.clientY - containerRect.top;

      const maxDistanceX = 20;
      const maxDistanceY = 25;
      const deltaX = mouseX - eyeCenterX[0];
      const deltaY = (mouseY - eyeCenterY) * (maxDistanceY / maxDistanceX);
      const distanceToMidpoint = Math.sqrt(
        (mouseX - eyeMidpointX) ** 2 + (mouseY - eyeMidpointY) ** 2
      );

      const pupilX = Math.max(-maxDistanceX, Math.min(deltaX, maxDistanceX));
      const pupilY = Math.max(-maxDistanceY, Math.min(deltaY, maxDistanceY));

      if (distanceToMidpoint < gravitateThreshold) {
        const vectorX = mouseX - eyeMidpointX;
        const vectorY = mouseY - eyeMidpointY;
        const adjustedDeltaX = vectorX * (maxDistanceX / gravitateThreshold);
        const adjustedDeltaY = vectorY * (maxDistanceY / gravitateThreshold);

        pupils.forEach((pupil) => {
          pupil.setAttribute(
            'transform',
            `translate(${pupilX + adjustedDeltaX}, ${pupilY + adjustedDeltaY})`
          );
        });
      } else {
        pupils.forEach((pupil) => {
          pupil.setAttribute('transform', `translate(${pupilX}, ${pupilY})`);
        });
      }
    };

    svgContainer.addEventListener('mousemove', handleMouseMove);

    return () => {
      svgContainer.removeEventListener('mousemove', handleMouseMove);
    };
  }, [headIndex]);

  

  useEffect(() => {
    //calculate within useEffect to call on load
    // const gameBoardSize = document.querySelector('.game-board');
    // console.log(gameBoardSize.clientWidth)
    const handleKeyDown = (event) => {
      const speed = 10;
      const { key } = event;

      setPosition((prevPosition) => {
        const newPosition = { ...prevPosition };

        switch (key) {
          case 'w':
            newPosition.y -= speed;
            break;
          case 'a':
            newPosition.x -= speed;
            break;
          case 's':
            newPosition.y += speed;
            break;
          case 'd':
            newPosition.x += speed;
            break;
          default:
            break;
        }

        return newPosition;
      });
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const saveSvg = () => {
    const svgElement = document.querySelector('.avatar');
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svgElement);
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
  
    const link = document.createElement('a');
    link.href = url;
    link.download = 'avatar.svg';
    link.click();
  
    URL.revokeObjectURL(url);
  };



  const handleHeadOptionClick = (headIndex) => {
    console.log(CurrentHead)
    setCurrentCharacter((prevCharacter) => ({
      ...prevCharacter,
      headIndex: headIndex,
    }));
  };

  
  const handleChestOptionClick = (chestIndex) => {
    console.log(CurrentChest)
    setCurrentCharacter((prevCharacter) => ({
      ...prevCharacter,
      chestIndex: chestIndex,
    }));
  };

  const handleLegsOptionClick = (legsIndex) => {
    console.log(CurrentLegs)
    setCurrentCharacter((prevCharacter) => ({
      ...prevCharacter,
      legsIndex: legsIndex,
    }));
  };

  const handleShoesOptionClick = (shoesIndex) => {
    console.log(CurrentShoes)
    setCurrentCharacter((prevCharacter) => ({
      ...prevCharacter,
      shoesIndex: shoesIndex,
    }));
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };






  return (
    <div className="holder" 
    style={{ position: 'relative' }}>




      <button
      id="head"
      className='button-19'
            onClick={() => handleTabClick('head')} 
      >head
      </button>
      
      <button
      id="chest"
      className='button-19'
      onClick={() => handleTabClick('chest')} 
      >chest
      </button>

      <button
      id="legs"
      className='button-19'
      onClick={() => handleTabClick('legs')} 
      >legs
      </button>
      
      <button
      id="shoes"
      className='button-19'
      onClick={() => handleTabClick('shoes')} 
      >shoes
      </button>

<div className="skinOptions">
      <div className="skinOptionBox">
      <ColorSwatches onColorChange={handleColorChange} />

      </div>
    </div>
    


{activeTab === 'head' && (
    <div className="HeadOptions">
    <div
          className="HeadOptionBox"
          width={200}
          height={200}
          viewBox={`0 0 ${originalWidth} ${originalHeight}`}
          onClick={() => handleHeadOptionClick(0)} // Pass the head index as an argument
        >
          <HeadOption1 />
        </div>
        <div
          className="HeadOptionBox"
          width={200}
          height={200}
          viewBox={`0 0 ${originalWidth} ${originalHeight}`}
          onClick={() => handleHeadOptionClick(1)} // Pass the head index as an argument
        >
          <HeadOption2 />
        </div>
        <div
          className="HeadOptionBox"
          width={200}
          height={200}
          viewBox={`0 0 ${originalWidth} ${originalHeight}`}
          onClick={() => handleHeadOptionClick(2)} // Pass the head index as an argument
        >
          <HeadOption3 />
        </div>
    </div>
     )}


{activeTab === 'chest' && (
      <div className="chestOptions">
      <div
                className="chestOptionBox"
                onClick={() => handleChestOptionClick(0)} 
      >
        <ChestOption1/>
      </div>

      <div
                      className="chestOptionBox"
                      onClick={() => handleChestOptionClick(1)} >
        <ChestOption2/>
      </div>

      <div
                      className="chestOptionBox"
                      onClick={() => handleChestOptionClick(2)} >
        <ChestOption3/>
      </div>

      </div>
        )}



{activeTab === 'legs' && (
      <div className="legsOptions">
      <div
                className="legsOptionBox"
                onClick={() => handleLegsOptionClick(0)} 
      >
        <LegsOption1/>
      </div>

      <div
                      className="legsOptionBox"
                      onClick={() => handleLegsOptionClick(1)} >
        <LegsOption2/>
      </div>

      <div
                      className="legsOptionBox"
                      onClick={() => handleLegsOptionClick(2)} >
        <LegsOption3/>
      </div>

      </div>
        )}

{activeTab === 'shoes' && (
    <div className="shoesOptions">
    <div
          className="shoesOptionBox"
          onClick={() => handleShoesOptionClick(0)} // Pass the head index as an argument
        >
          <ShoesOption1 />
        </div>
        <div
          className="shoesOptionBox"
          onClick={() => handleShoesOptionClick(1)} // Pass the head index as an argument
        >
          <ShoesOption2 />
        </div>
        <div
          className="shoesOptionBox"
          onClick={() => handleShoesOptionClick(2)} // Pass the head index as an argument
        >
          <ShoesOption3 />
        </div>
    </div>
     )}


      <div
        className='avatar-container'
        style={{ position: 'absolute', left: screenWidth/3.5, top: screenHeight/3}}
        ref={svgContainerRef}
      >
        <svg
          width={scaledWidth}
          height={scaledHeight}
          viewBox={`0 0 ${originalWidth} ${originalHeight}`}
          style={{ width: `${desiredWidth}px`, height: `${desiredHeight}px`}}
          onClick={handleDrawingClick}
          className='avatar'
        >
          <CurrentChest />
          <CurrentHead/>
          <CurrentLegs />
          <CurrentShoes />
        </svg>
      </div>

      <button className='saveButton' onClick={saveSvg}>Save SVG</button>
      

      <button className='saveButtonDB' onClick={saveSvgToDatabase}>Save SVG to DB</button>

    </div>
    
  );
};

export default Player;
