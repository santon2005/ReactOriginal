import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import './CardProducts.css'
import ItemCount from '../ItemCount/ItemCount'

const CardProducts = ({Imagen, Nombre, Precio, Descripcion}) => {
    return (
        <div>
 <Card className='hola'>
    <Image src={Imagen} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{Nombre}</Card.Header>
      <Card.Description>
      {Descripcion}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      {Precio}
    <ItemCount />
    </Card.Content>
  </Card>
        </div>
    )
}

export default CardProducts
