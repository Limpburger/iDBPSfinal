import logo from './logo.svg';
import './App.css';
import GameBoard from './GameBoard';
import Login from './Login';
import Signup from './Signup';
import Avatar from './Avatar';
import HeadSvg from './img/head1Man.svg';
import ChestSvg from './img/chest1-cropped.svg';
import LegsSvg from './img/legs1-cropped.svg';
import ShoesSvg from './img/shoes1-cropped.svg';
//ERRORS import { MongoClient } from 'mongodb'; 


function App() {

//const { mongoDBConnectionString } = require('./config');
// Connect to MongoDB
// MongoClient.connect(mongoDBConnectionString, (err, client) => {
//   if (err) {
//     console.error('Error connecting to MongoDB:', err);
//     return;
//   }
// });
const headSvg = HeadSvg;
const chestSvg = ChestSvg;
const legsSvg = LegsSvg;
const shoesSvg = ShoesSvg;

const bodyColor = '#00FF00';
  return (
    <div className="App">

      <div className="authBox">
        
        <div className="signup"> 
          <Signup/>
        </div>

        <div className="login">
          <Login/>
        </div>

      </div>

<GameBoard/>
    </div>
  );
}

export default App;
