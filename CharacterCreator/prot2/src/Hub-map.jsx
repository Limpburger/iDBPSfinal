import React, { useState, useEffect, useRef } from "react";

function IsoTileMap() {
  const canvasRef = useRef(null);
  const [tileMap, setTileMap] = useState([]);

  const tileWidth = 32;
  const tileHeight = 32;

  const tiles = [
    { color: "#f00" },
    { color: "#0f0" },
    { color: "#00f" },
    { color: "#ff0" }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const numRows = 500 / tileHeight;
    const numCols = 500 / tileWidth;

    const newTileMap = [];

    for (let i = 0; i < numRows; i++) {
      const row = [];
      for (let j = 0; j < numCols; j++) {
        row.push({ x: j * tileWidth, y: i * tileHeight, tileIndex: 0 });
      }
      newTileMap.push(row);
    }

    setTileMap(newTileMap);

    function drawTile(tile) {
      context.beginPath();
      context.moveTo(tile.x + tileWidth / 2, tile.y);
      context.lineTo(tile.x + tileWidth, tile.y + tileHeight / 2);
      context.lineTo(tile.x + tileWidth / 2, tile.y + tileHeight);
      context.lineTo(tile.x, tile.y + tileHeight / 2);
      context.closePath();
      context.fillStyle = tiles[tile.tileIndex].color;
      context.fill();
    }

    function drawTileMap() {
      context.clearRect(0, 0, canvas.width, canvas.height);

      tileMap.forEach(row => {
        row.forEach(tile => {
          drawTile(tile);
        });
      });

      requestAnimationFrame(drawTileMap);
    }

    drawTileMap();
  }, []);

  function handleMouseDown(event) {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const mouseIsDown = true;
  
    tileMap.forEach(row => {
      row.forEach(tile => {
        if (
          mouseX > tile.x &&
          mouseX < tile.x + tileWidth &&
          mouseY > tile.y &&
          mouseY < tile.y + tileHeight
        ) {
          tile.isDragging = true;
          tile.dragOffsetX = mouseX - tile.x;
          tile.dragOffsetY = mouseY - tile.y;
        }
      });
    });
  }

  function handleMouseMove(event) {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    tileMap.forEach(row => {
      row.forEach(tile => {
        if (tile.isDragging) {
          tile.x = mouseX - tile.dragOffsetX;
          tile.y = mouseY - tile.dragOffsetY;
        }
      });
    });
  }

  function handleMouseUp(event) {
    const mouseIsDown = true;
if(mouseIsDown){
    tileMap.forEach(row => {
        row.forEach(tile => {
          tile.isDragging = false;
        });
      });
}
  }

  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={500}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    />
  );
}



export default IsoTileMap