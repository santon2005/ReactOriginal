import React from 'react'
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Item = ({ item }) => {
    return (
        <div className='Item'>
            <Card style={{ width: '18rem' }}>
  <Card.Img src={ item.Imagen } />
  <Card.Body>
    <Card.Title>{ item.Nombre }</Card.Title>
    <Card.Text>
      { item.Precio }
    </Card.Text>
    <Button variant="primary">BUY</Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default Item
