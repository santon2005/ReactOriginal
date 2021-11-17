import React from 'react'
import './ItemListContainer.css'
import CardProducts from '../CardProducts/CardProducts'

const ItemListContainer = () => {
    return (
        <div className='Card'>
            <CardProducts
            Imagen  ='https://http2.mlstatic.com/D_NQ_NP_790256-MLA45755946516_042021-O.webp'
            Nombre='Apple - iPhone 11, 64GB'
            Descripcion='Stock limitado (10 unidades)'
            Precio='US$479.00 '
            />
        </div>
    )
}

export default ItemListContainer
