import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import React from 'react';

function App() {
  return (
    <Router>
      <div className='App'>
        <h1>Trang chu</h1>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/home' element={<Home />}></Route>
        </Routes>
      </div>
  </Router> 
  );
}

export default App;
