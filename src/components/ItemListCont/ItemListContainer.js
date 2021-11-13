import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = (props) => {
    return (
        <div>
            <h1 className='TextContent'>{props.saludo}</h1>
        </div>
    )
}

export default ItemListContainer
