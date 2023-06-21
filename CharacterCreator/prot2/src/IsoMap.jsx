import React, { useState } from 'react';
import { IsometricTilemap } from 'react-isometric-tilemap';

function MyComponent() {
  const [tiles, setTiles] = useState([
    { x: 0, y: 0, z: 0, color: '#ff0000' },
    { x: 1, y: 0, z: 0, color: '#00ff00' },
    { x: 0, y: 1, z: 0, color: '#0000ff' },
    { x: 1, y: 1, z: 0, color: '#ffff00' },
  ]);

  function handleTileDrag(tileIndex, newPosition) {
    // update the position of the tile
    const newTiles = tiles.map((tile, index) => {
      if (index === tileIndex) {
        return { ...tile, ...newPosition };
      } else {
        return tile;
      }
    });
    setTiles(newTiles);
  }

  return (
    <div style={{ width: 500, height: 500 }}>
      <IsometricTilemap
        width={500}
        height={500}
        tileSize={64}
        tiles={tiles}
        onTileDrag={handleTileDrag}
      />
    </div>
  );
}

export default MyComponent;



