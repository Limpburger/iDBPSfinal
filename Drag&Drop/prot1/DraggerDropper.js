import React, { useState, useRef, useEffect } from 'react';
import Logo from "./logo.svg";
import "./App.css";
import Modal from 'react-modal'
import Avatar from './Avatar.jsx'



Modal.setAppElement('#root');

const GRID_SIZE = 100;


const HomeScreen = () => {
  const [objects, setObjects] = useState([
    { id: 'house', x: 0, y: 0 },
    { id: 'shop', x: 0, y: 0 },
  ]);

  const handleDrop = (id, x, y) => {
    setObjects((prevObjects) =>
      prevObjects.map((obj) => (obj.id === id ? { ...obj, x, y } : obj))
    );
  };

  return (
    <div className="home-screen">
      {objects.map(obj => (
        <DraggableObject key={obj.id} {...obj} onDrop={handleDrop}  />
      ))}
      <DropTarget />
    </div>
  );
};

const DraggableObject = ({ id, x, y, onDrop}) => {
    const dragObjectRef = useRef(null);
    const [dragging, setDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    //modalState
    const [houseModalIsOpen, setHouseModalIsOpen] = useState(false);
    const [shopModalIsOpen, setShopModalIsOpen] = useState(false);

    const [selectedObject, setSelectedObject] = useState('');

  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', id);
    e.dataTransfer.dropEffect = 'move';

    setDragging(true);
    setOffset({
      x: e.clientX - dragObjectRef.current.offsetLeft,
      y: e.clientY - dragObjectRef.current.offsetTop,
    });
  };

  const handleDragEnd = (e) => {
    setDragging(false);
    const x = e.clientX - offset.x;
    const y = e.clientY - offset.y;

    const newX = Math.round(x / GRID_SIZE) * GRID_SIZE;
    const newY = Math.round(y / GRID_SIZE) * GRID_SIZE;

    if (newX >= 0 && newX + GRID_SIZE <= 1000 && newY >= 0 && newY + GRID_SIZE <= 1000) {
        onDrop(id, newX, newY);
      } else {
        onDrop(id, 0, 0);
      }
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const x = e.clientX - offset.x;
      const y = e.clientY - offset.y;
      dragObjectRef.current.style.left = `${x}px`;
      dragObjectRef.current.style.top = `${y}px`;
    }
  };

    // Use the updated x and y values in the style attribute
    const style = { left: `${x}px`, top: `${y}px` };

    // Handle Click images
    const [houseClicked, setHouseClicked] = useState(false);
    const [shopClicked, setShopClicked] = useState(false);

    const [isCustomizing, setIsCustomizing] = useState(false);

    //Click house object in grid > navigate to house Modal
    const houseClick = () => {
        setSelectedObject("House");
        setHouseModalIsOpen(true);
        console.log('Click House');
        setHouseClicked(true);
        setShopClicked(false);
      } 
    //Click shop object in grid > navigate to shop Modal
      const shopClick = () => {
        setSelectedObject("Shop");
        setShopModalIsOpen(true);
        setShopClicked(true);
        setHouseClicked(false);
        console.log('Click Shop');
      } 

      const customizeCharClick = () => {
        setIsCustomizing(true);
        const AvatarCont = document.getElementsByClassName('post_preview');
        <Avatar/>
        console.log(AvatarCont)
        if(isCustomizing){
          console.log(isCustomizing)
          return(<Avatar/>);
        }
      }

  return (
    <div
    ref={dragObjectRef}
    className={`draggable-object 
    ${id === 'house' && houseClicked ? 'house-clicked' : ''} 
    ${id === 'shop' && shopClicked ? 'shop-clicked' : ''}`}
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onMouseMove={handleMouseMove}
      style={style}
    >
      {id === 'house' && <img onClick={() => houseClick()} src={Logo} alt="House" width="100px" height="100px" />}
      {id === 'shop' && <img onClick={() => shopClick()} src={Logo} alt="Shop" width="100px" height="100px"  />}
      
      {/* House Modal Page */}
      <Modal isOpen={houseModalIsOpen}>
   
        <div className="houseModal">
          <header>
        <button className="cancelModalButton" onClick={() => setHouseModalIsOpen(false)}>Close House</button>
          </header>

        <h2>{selectedObject}</h2>

        
        <div className="AvatarContainer">
        <Avatar/>
        </div>
        </div>
        <button className="Customize-char" onClick={() => customizeCharClick()} >Customize Character</button>

        
      </Modal>

      <Modal isOpen={shopModalIsOpen}>
        <div className="shopModal">
        <h2>{selectedObject}</h2>
        <button className="cancelModalButton" onClick={() => setShopModalIsOpen(false)}>Close Shop</button>
        </div>
      </Modal>
    </div>
  );
};

const DropTarget = () => {
  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');

    const x = e.clientX - e.target.getBoundingClientRect().left;
    const y = e.clientY - e.target.getBoundingClientRect().top;

    // Call the onDrop function with the updated coordinates
    if (id) {
      const onDrop = e.target.getAttribute('ondrop');
      window[onDrop](id, x, y);
    }
  };
  const dropAreaRef = useRef(null);

  useEffect(() => {
    // Still needs to be added to If statement of droppable
    const dropAreaWidth = dropAreaRef.current.offsetWidth;
    const dropAreaHeight = dropAreaRef.current.offsetHeight;
  }, []);





  return <div ref={dropAreaRef} className="drop-target" onDragOver={handleDragOver} onDrop={handleDrop}></div>;
};

export default HomeScreen;
