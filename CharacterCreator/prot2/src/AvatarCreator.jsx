import React, { useState } from "react";
// import domtoimage from "dom-to-image";
import FileSaver from "file-saver";

const CharacterCreator = () => {
  const [headIndex, setHeadIndex] = useState(0);
  const [hairIndex, setHairIndex] = useState(0);
  const [eyesIndex, setEyesIndex] = useState(0);
  const [mouthIndex, setMouthIndex] = useState(0);
  const [shirtIndex, setShirtIndex] = useState(0);
  const [pantsIndex, setPantsIndex] = useState(0);
  const [shoesIndex, setShoesIndex] = useState(0);

  const headArray = ["head1.svg", "head2.svg", "head3.svg"];
  const hairArray = ["hair1.svg", "hair2.svg", "hair3.svg"];
  const eyesArray = ["eyes1.svg", "eyes2.svg", "eyes3.svg"];
  const mouthArray = ["mouth1.svg", "mouth2.svg", "mouth3.svg"];
  const shirtArray = ["shirt1.svg", "shirt2.svg", "shirt3.svg"];
  const pantsArray = ["pants1.svg", "pants2.svg", "pants3.svg"];
  const shoesArray = ["shoes1.svg", "shoes2.svg", "shoes3.svg"];

  // const saveAsImage = () => {
  //   const node = document.getElementById("character");
  //   domtoimage.toBlob(node).then(function (blob) {
  //     FileSaver.saveAs(blob, "character.png");
  //   });
  // };

  const CurrentHead = () => {
    const head = headArray[headIndex];
    return <image href={head} />;
  };

  const CurrentHair = () => {
    const hair = hairArray[hairIndex];
    return <image href={hair} />;
  };

  const CurrentEyes = () => {
    const eyes = eyesArray[eyesIndex];
    return <image href={eyes} />;
  };

  const CurrentMouth = () => {
    const mouth = mouthArray[mouthIndex];
    return <image href={mouth} />;
  };

  const CurrentShirt = () => {
    const shirt = shirtArray[shirtIndex];
    return <image href={shirt} />;
  };

  const CurrentPants = () => {
    const pants = pantsArray[pantsIndex];
    return <image href={pants} />;
  };

  const CurrentShoes = () => {
    const shoes = shoesArray[shoesIndex];
    return <image href={shoes} />;
  };

  return (
    <div>
      <div id="character">
        <svg width="600" height="1000">
          <CurrentHead />
          <CurrentHair />
          <CurrentEyes />
          <CurrentMouth />
          <CurrentShirt />
          <CurrentPants />
          <CurrentShoes />
        </svg>
      </div>



      <div>
        <button onClick={() => setHeadIndex((headIndex + 1) % headArray.length)}>Change Head</button>
        <button onClick={() => setHairIndex((hairIndex + 1) % hairArray.length)}>Change Hair</button>
        <button onClick={() => setEyesIndex((eyesIndex + 1) % eyesArray.length)}>Change Eyes</button>
        <button onClick={() => setMouthIndex((mouthIndex + 1) % mouthArray.length)}>Change Mouth</button>
        <button onClick={() => setShirtIndex((shirtIndex + 1) % shirtArray.length)}>Change Shirt</button>
    </div>


    <div id="svg-container">
      <object data="path/to/sprite.svg" type="image/svg+xml">

      </object>
    </div>




</div>


);
}

export default CharacterCreator