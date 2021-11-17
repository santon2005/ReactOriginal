import React, {Fragment} from 'react';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListCont/ItemListContainer';




 function App() {
  return (
    <Fragment>
    <NavBar/>
    <ItemListContainer/>
    </Fragment>

  );
}

export default App;