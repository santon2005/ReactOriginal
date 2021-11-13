import React from 'react'
import './CardProducts.css'
import { Card, Image } from 'semantic-ui-react'


const CardProducts = (props) => {
    return (
        <div>
            <Card>
    <Image src={props.Imagen} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.Nombre}</Card.Header>
      <Card.Description>
      {props.Precio}
      </Card.Description>
    </Card.Content>
    <button class="ui button">Comprar</button>
  </Card>
        </div>
    )
}

export default CardProducts
