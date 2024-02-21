import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import StateBasics from './components/StateBasics';
import Counter from './components/Counter';
import Signup from './components/Signup';
import UseEffect from './components/UseEffect';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
      {/* <StateBasics></StateBasics> */}
      {/* <Counter></Counter> */}
      {/* <Signup></Signup> */}
      {/* <UseEffect></UseEffect> */}
    </div>
  );
}

export default App;
