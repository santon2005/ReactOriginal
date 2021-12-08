import React from 'react'
import CardIpad from '../../components/CardIpad/CardIpad'
import './Ipad.css'

const Ipad = () => {
    return (
        <div className='PadreMayor'>
        <div className="Cards-Ipad">
         <CardIpad 
         Imagen='https://http2.mlstatic.com/D_NQ_NP_686413-MLA46952721031_082021-O.webp'
         Nombre='iPad Mini 5'
         Precio='U$ 1700'
         />

       <CardIpad 
         Imagen='https://http2.mlstatic.com/D_NQ_NP_711191-MLA47871333065_102021-O.webp'
         Nombre='iPad 9'
         Precio='U$ 1700'
         />
     
          <CardIpad 
          Imagen='https://http2.mlstatic.com/D_NQ_NP_983456-MLA46962206199_082021-O.webp'
          Nombre='iPad Air 4'
          Precio='U$ 1700'
          />
        
        <CardIpad 
        Imagen='https://http2.mlstatic.com/D_NQ_NP_739351-MLA46975298090_082021-O.webp'
        Nombre='iPad Pro 5'
        Precio='U$ 1700'
        Link='http://www.apple.com/la/ipad-pro/'
        />
      </div>
      </div>
    )
}

export default Ipad
