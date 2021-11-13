import React, {Fragment} from 'react';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListCont/ItemListContainer';




 function App() {
  return (
    <Fragment>
    <NavBar/>
    <ItemListContainer
    saludo='Hola aca van a estar alojados mis productos de mi E-COMMERCE'
    
    />
    
    </Fragment>

  );
}

export default App;