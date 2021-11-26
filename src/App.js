import React from 'react';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./views/Home"
import Ipad from "./views/Ipad"
import Iphone from "./views/Iphone"
import Mac from "./views/Mac"




 const App = () => {
  return (
    <Router>
      <div className="App">
         <NavBar />
       <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="./Ipad" element={<Ipad />}/>
            <Route path="./Iphone" element={<Iphone />}/>
            <Route path="./Mac" element={<Mac />}/>
       </Routes>
       </div>
    </Router>
  

  );
}

export default App;