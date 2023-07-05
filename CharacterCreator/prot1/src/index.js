import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import Canvas from './Canvas'
//import UI from './UserInterface'
import Avatar from './Avatar'
//import Canvas from './Canvas.jsx'
//import Game from './Game1.jsx'
//import TileGrid from './TileGird.jsx'



//import background from "./img/1.png";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Avatar/>
  </React.StrictMode>
);



reportWebVitals();
