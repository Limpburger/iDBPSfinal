import React, { useState } from 'react'
import bodyparts from "./img/Body_Parts/1_KNIGHT/1_body_.png"
import './Avatar.css'
import img from './img/1.png'

//bodyparts
import head1 from "./img/Body_Parts/1_KNIGHT/1_head_.png"
import head2 from "./img/Body_Parts/2_KNIGHT/2_head_.png"
import head3 from "./img/Body_Parts/3_KNIGHT/3_head_.png"

import body1 from "./img/Body_Parts/1_KNIGHT/1_body_.png"
import body2 from "./img/Body_Parts/2_KNIGHT/2_body_.png"
import body3 from "./img/Body_Parts/3_KNIGHT/3_body_.png"

import leftleg1 from "./img/Body_Parts/1_KNIGHT/1_leftleg_.png"
import leftleg2 from "./img/Body_Parts/2_KNIGHT/2_leftleg_.png"
import leftleg3 from "./img/Body_Parts/3_KNIGHT/3_leftleg_.png"

import rightleg1 from "./img/Body_Parts/1_KNIGHT/1_rightleg_.png"
import rightleg2 from "./img/Body_Parts/2_KNIGHT/2_rightleg_.png"
import rightleg3 from "./img/Body_Parts/3_KNIGHT/3_rightleg_.png"

function AccountForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Name: ", name);
      console.log("Email: ", email);
      console.log("Password: ", password);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
  
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
  
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
  
        <button type="submit">Submit</button>
      </form>
    );
  }
  



const User = () => {
    const name = 'John'
    const age = '7'
    const gender = 'Male'

    
    return(
    <div className='ContainerDiv'>
        <h1>Welcome, {name}!</h1>


        <label> Name: 
        <input key="nameInput" placeholder='Name'></input>
        </label>

        <label> Age: 
        <input placeholder='Age'></input>
        </label>

        <label> Gender: 
        <input placeholder='Gender'></input>
        </label>



 
        

        <button onClick={AvatarSaveButton} className="saveButton">Save</button>

    </div>

    )
}

function AvatarSaveButton(){


}

function CustomizeButtons(e){
    const [count, setCount] = useState(0);
    return (
        <button onClick={() => setCount(count + 1)}>
          You clicked me {count} times
        </button>
      );
}


function ImageCycle() {
    const [imageIndex, setImageIndex] = useState(0);

    const [headCount, setHeadCount] = useState(0);
    const [bodyCount, setBodyCount] = useState(0);

    const [legCount, setLegCount] = useState(0);



    const headImages = [
        require("./img/Body_Parts/1_KNIGHT/1_head_.png"),
        require("./img/Body_Parts/2_KNIGHT/2_head_.png"),
        require("./img/Body_Parts/3_KNIGHT/3_head_.png"),
      ];

    const bodyImages = [
      require("./img/Body_Parts/1_KNIGHT/1_body_.png"),
      require("./img/Body_Parts/2_KNIGHT/2_body_.png"),
      require("./img/Body_Parts/3_KNIGHT/3_body_.png"),
    ];

    const leftLegImages = [
        require("./img/Body_Parts/1_KNIGHT/1_leftleg_.png"),
        require("./img/Body_Parts/2_KNIGHT/2_leftleg_.png"),
        require("./img/Body_Parts/3_KNIGHT/3_leftleg_.png"),
      ];

      const rightLegImages = [

        require("./img/Body_Parts/1_KNIGHT/1_rightleg_.png"),
        require("./img/Body_Parts/2_KNIGHT/2_rightleg_.png"),
        require("./img/Body_Parts/3_KNIGHT/3_rightleg_.png"),
      ];

//CONTROLS
    function handleHeadClickPlus() {
        setHeadCount((headCount + 1) % headImages.length);
        if(headCount < 2){
            setHeadCount(headCount + 1)
        }else{
            setHeadCount(0)
        }
      }
  
    function handleBodyClickPlus() {
        setBodyCount((bodyCount + 1) % bodyImages.length);
        if(bodyCount < 2){
            setBodyCount(bodyCount + 1)
        }else{
            setBodyCount(0)
        }
    }

    function handleLegClickPlus() {
        setLegCount((legCount + 1) % leftLegImages.length);
        if(legCount < 2){
            setLegCount(legCount + 1)
        }else{
            setLegCount(0)
        }
    }


    function handleHeadClickMin() {
        setHeadCount((headCount + 1) % headImages.length);
        if(headCount < 1){
            setHeadCount(headImages.length -1)
        }else{
            setHeadCount(headCount - 1)
        }
      }
  
    function handleBodyClickMin() {
        setBodyCount((bodyCount + 1) % bodyImages.length);
        if(bodyCount < 1){
            setBodyCount(bodyImages.length -1)
        }else{
            setBodyCount(bodyCount - 1)
        }
    }

    function handleLegClickMin() {
        setLegCount((legCount + 1) % rightLegImages.length);
        if(legCount < 1){
            setLegCount(rightLegImages.length -1)
        }else{
            setLegCount(legCount - 1)
        }
    }

  
    return (
        <div className="avatarContainer">


        <div className="leftContainerButtons">
            <button onClick={handleHeadClickMin} className='customizeButton'>{headCount}</button>
            <button onClick={handleBodyClickMin} className='customizeButton'>{bodyCount}</button>
            <button onClick={handleLegClickMin} className='customizeButton'>{legCount}</button>
        </div>





        <div className="avatarImgContaier">
            <div className="bodyCon">
                <img id="bodyImg" src={bodyImages[bodyCount]} alt="Cycle Image" />
            </div>

            <div className="headCon">
                <img id="headImg" src={headImages[headCount]} alt="Cycle Image" />
            </div>
            <div className="legCon">
            <img className="legImg" src={leftLegImages[legCount]} alt="Cycle Image" />
            <img className="legImg" src={rightLegImages[legCount]} alt="Cycle Image" />
            </div>


        </div>





        <div className="rightContainerButtons">
            <button onClick={handleHeadClickPlus} className='customizeButton'>{headCount}</button>
            <button onClick={handleBodyClickPlus} className='customizeButton'>{bodyCount}</button>
            <button onClick={handleLegClickPlus} className='customizeButton'>{legCount}</button>
        </div>
        
        </div>



    );
  }



export default function Account(){
    return (
        <>
        <h1>Create your character!</h1>
        <AccountForm/>
        
          <ImageCycle/>
          <User/>

        </>
      );
};

//export default Avatar