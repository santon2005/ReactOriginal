import React from 'react'
import CardIphones from '../../components/CardIphones/CardIphones'
import './Iphone.css'

const Iphone = () => {
    return (
    <>
            <div className='Body'>
        <div className='Padre'>
        <div className="Cards">
        <CardIphones 
        Imagen='https://http2.mlstatic.com/D_NQ_NP_696612-MLA47776655319_102021-O.webp'
        Nombre='iPhone 13 Pro Max'
        Precio='U$ 1700'
        />
         <CardIphones 
        Imagen='https://http2.mlstatic.com/D_NQ_NP_890386-MLA47780449108_102021-O.webp'
        Nombre='iPhone 13 Pro'
        Precio='U$ 1500'
        />
         <CardIphones 
        Imagen='https://http2.mlstatic.com/D_NQ_NP_973345-MLA47781591382_102021-O.webp'
        Nombre='iPhone 13 '
        Precio='U$ 1300'
        />
          <CardIphones 
        Imagen='https://http2.mlstatic.com/D_NQ_NP_686695-MLA46088620288_052021-O.webp'
        Nombre='iPhone 12 Pro Max '
        Precio='U$ 1200'
        />
          <CardIphones 
        Imagen='https://http2.mlstatic.com/D_NQ_NP_874720-MLA46088620270_052021-O.webp'
        Nombre='iPhone 12 Pro  '
        Precio='U$ 1100'
        />
          <CardIphones 
        Imagen='https://http2.mlstatic.com/D_NQ_NP_699194-MLA46115014420_052021-O.webp'
        Nombre='iPhone 11   '
        Precio='U$ 1000'
        />
        </div>
        
            <div className="Cards-V2">
            <CardIphones 
        Imagen='https://http2.mlstatic.com/D_NQ_NP_974008-MLA32234888855_092019-O.webp'
        Nombre='iPhone 11 Pro  '
        Precio='U$ 950'
        />
          <CardIphones 
        Imagen='https://http2.mlstatic.com/D_NQ_NP_954361-MLA46088620319_052021-O.webp'
        Nombre='iPhone 11 Pro Max  '
        Precio='U$ 900'
        />
          <CardIphones 
        Imagen='https://http2.mlstatic.com/D_NQ_NP_876284-MLA31182756184_062019-O.webp'
        Nombre='iPhone XS   '
        Precio='U$ 840'
        />
          <CardIphones 
        Imagen='https://http2.mlstatic.com/D_NQ_NP_808427-MLA31182862009_062019-O.webp'
        Nombre='iPhone XS   '
        Precio='U$ 870'
        />
          <CardIphones 
        Imagen='https://http2.mlstatic.com/D_NQ_NP_901394-MLA46545234226_062021-O.webp'
        Nombre='iPhone XR   '
        Precio='U$ 800'
        />
          <CardIphones 
        Imagen='https://http2.mlstatic.com/D_NQ_NP_810269-MLA46552118423_062021-O.webp'
        Nombre='iPhone SE    '
        Precio='U$ 450'
        />
        </div>
        </div>
        </div>
        </>
        
    )

}
export default Iphone


