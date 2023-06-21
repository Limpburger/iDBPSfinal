import logo from './logo.svg';
import './App.css';
import {DndProvider} from 'react-dnd';
//import {HTML5Backend} from 'react-dnd-html5-backend';
//import DragDrop from './components/DragDrop';
import DraggerDropper from "./DraggerDropper"
import Avatar from './Avatar.jsx'


function App() {
  return (
       <div className="App">
       <DraggerDropper/>
       </div>
  );
}


export default App;
