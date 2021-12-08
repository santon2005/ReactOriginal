import React from 'react';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./views/Home/Home"
import Ipad from "./views/Ipad/Ipad"
import Iphone from "./views/Iphone/Iphone"




 const App = () => {
  return (
    <Router>
      <div className="App">
         <NavBar />
       <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Ipad" element={<Ipad />}/>
            <Route path="/Iphone" element={<Iphone />}/>
       </Routes>
       </div>
    </Router>
  

  );
}

export default App;