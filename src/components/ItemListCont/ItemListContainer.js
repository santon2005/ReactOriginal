import React from 'react'
import './ItemListContainer.css'
import CardProducts from '../CardProducts/CardProducts'


const ItemListContainer = (props) => {
    return (
        <div>
            <h1 className='TextContent'>{props.saludo}</h1>
            <div className='card-section'>
            <CardProducts 
            Imagen='https://thumbs.dreamstime.com/b/chateau-puerto-madero-estilo-academia-francesa-edificio-residencial-buenos-aires-caba-argentina-nov-un-ubicado-en-el-barrio-m%C3%A1s-201198776.jpg'
            Nombre='Chateau Puerto Madero'
            Precio='U$D 700.000'
            
            />
             <CardProducts 
            Imagen='https://static.tokkobroker.com/pictures/74637308306827264249513985978612578408796145601982459582475028860648312014138.jpg'
            Nombre='Torres Madero'
            Precio='U$D 550.000'
            
            />

            </div>
        </div>
    )
}

export default ItemListContainer
