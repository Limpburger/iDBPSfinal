import React, { useState } from 'react';
import styled from 'styled-components';
import './index.css';

const Buttons = styled.div`
  position: absolute;
  margin:50px auto;
  width: 200px;
  height: 700px;
  background-color:red;

  linear-gradient(to bottom, grey 1px, transparent 1px);
  background-size: 50px 50px;
`;


const HubContainer = styled.div`
  position: relative;
  margin:50px auto;
  width: 83.4%;
  height: 700px;
  background-color: #ddd;
  background-image: linear-gradient(to right, grey 1px, transparent 1px),
    linear-gradient(to bottom, grey 1px, transparent 1px);
  background-size: 50px 50px;
`;

const ClickableObject = styled.div`
  position: absolute;
  top: ${({ position }) => `${position.y}px`};
  left: ${({ position }) => `${position.x}px`};
  width: 50px;
  height: 50px;
  background-color: red;
  cursor: pointer;
`;

const Hub = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [initialPosition, setInitialPosition] = useState({ x: 100, y: 100 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseDown = (event) => {
    setIsDragging(false);
    setIsClicked(false);
    setOffset({
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - event.target.offsetTop,
    });
    setTimeout(() => {
      setIsDragging(true);
    }, 100);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      console.log(isDragging)
      const x = event.clientX - offset.x;
      const y = event.clientY - offset.y;
      setInitialPosition({
        x: Math.round(x / 50) * 50,
        y: Math.round(y / 50) * 50,
      });
    }else{
      setIsClicked(true);
    }
  };

  const handleMouseUp = () => {
    if(isDragging){
      setIsDragging(false);
    }else{
      setIsClicked(true);
    }


    alert('The object was clicked!');

    if (isDragging) {
      setIsDragging(false);
    } else {
      setIsClicked(true);
      alert('The object was clicked!');
      console.log(isDragging)
      // Add code here to update the whole page
      setIsClicked(false);
    }
  };

  return (
    <HubContainer onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      <ClickableObject position={initialPosition} onMouseDown={handleMouseDown} />
    </HubContainer>
  );
};


const Player = () => {

  return (
    <Buttons></Buttons>
  )
}

const user = {
  name : "John",
  age : 33,
  length : 1.70,
  Avatar : {
    skinColor : "green",
    head : {
      face : {
        img : "%PUBLIC_URL%/logo192.png",
      },
      hair : {
        img : "%PUBLIC_URL%/logo192.png",
        color : "red"
      },
      eyes : {
        img : "%PUBLIC_URL%/logo192.png",
        color : "blue"
      },
      hat : {
        img : "%PUBLIC_URL%/logo192.png",
        color : "yellow"
      },
    },
  }
}
console.log(user)
export default Hub;
