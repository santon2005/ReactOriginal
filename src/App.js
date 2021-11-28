import React from 'react';
import './App.css'
//import NavBar from './components/NavBar/NavBar';
import Item from './components/Item/Item';




 function App() {
  return (
   <div className='App'> 
        <Item 
     Imagen='https://http2.mlstatic.com/D_NQ_NP_696612-MLA47776655319_102021-O.webp'
     Nombre='iPhone 13 Pro Max'
     Precio='U$ 1700'
     />

   </div>

  );
}

export default App;