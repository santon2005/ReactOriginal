import React, {Fragment} from 'react';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import Cart from './components/CartWidget/Cart';



 function App() {
  return (
    <Fragment>
    <NavBar/>
    <Cart />
    
    </Fragment>

  );
}

export default App;