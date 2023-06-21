import React, { useState, useEffect } from 'react';
import Player from './Player';
import './App.css';
import Head from './playerParts/Head';
import Game from './Game';
import Phaser from 'phaser';
import HouseScene from './HouseScene';
import UIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';

const GameBoard = () => {
  let screenWidth = window.screen.width;
let screenHeight = window.screen.height;
  const playerPosition = { x: 0, y: 0 };
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [gameVisible, setGameVisible] = useState(false);
  let game = null; // Declare the game variable outside the useEffect hook

  const toggleGame = () => {
    setGameVisible((prevVisible) => !prevVisible);
  };

  const generateSvgData = () => {
    const svgElement = document.querySelector('.avatar'); // Get the SVG element
    const svgData = new XMLSerializer().serializeToString(svgElement); // Convert SVG element to string
    return svgData;
  };

  useEffect(() => {
    if (gameVisible) {
      game = new Phaser.Game({
        type: Phaser.AUTO,
        width: screenWidth/2,
        height: screenHeight/2,
        plugins: {
          scene: [
            {
              key: 'rexUI',
              plugin: UIPlugin,
              mapping: 'rexUI'
            }
          ]
        },
        scale:{
          mode: Phaser.Scale.MAX_ZOOM,
        },
        scene: [Game, HouseScene],
        physics: {
          default: 'arcade',
          arcade: {
            gravity: { y: 500 },
            debug: false
          }
        }
      });
    }

    return () => {
      if (game) {
        game.destroy(true);
      }
    };
  }, [gameVisible]); // toggle game visibility

  return (
    <div className="game-board">
      <button onClick={toggleGame}>Toggle Game</button>

      {gameVisible && (
        <div style={{ position: 'relative' }}>
          <canvas id="game-canvas" style={{ position: 'absolute', top: 0, right: 0 }}></canvas>
        </div>
        
      )}
                {/* Render other game components */}
                <Player position={playerPosition} selectedColor={selectedColor} generateSvgData={generateSvgData} />
    </div>
  );
};

export default GameBoard;
