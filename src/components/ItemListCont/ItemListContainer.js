import React from 'react'
import './ItemListContainer.css'
import {  Image } from 'semantic-ui-react'



const ItemListContainer = () => {
    return (
        <div className='Contenido'>
            <h1>Nuevo iPhone 13 Pro Max!</h1>
            <Image src='https://www.apple.com/v/iphone-13-pro/c/images/meta/iphone-13-pro_specs__5omxro080oyy_og.png' />
        </div>
    )
}

export default ItemListContainer
