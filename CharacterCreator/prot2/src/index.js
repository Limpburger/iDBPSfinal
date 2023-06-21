import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Player from './Player.jsx';
import reportWebVitals from './reportWebVitals';
//import AvatarSprite from './Character'
//import AvatarC from './AvatarC.jsx'
import Spriter from './spritecreator';
//import HubMap from './Hub-map.jsx';
import MyComponent from './IsoMap.jsx';

import PlayerAvatar from './AvatarCreator.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Player/>
  </React.StrictMode>
);
reportWebVitals();
