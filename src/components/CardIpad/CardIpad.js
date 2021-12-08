import React from 'react'
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardIpad.css'


const CardIpad = ({Imagen, Nombre, Precio}) => {
    return (
      <>
      <div className='Card-iPad'>
        <Card style={{ width: '18rem' }}>
<Card.Img src={Imagen} />
<Card.Body>
<Card.Title>{Nombre}</Card.Title>
<Card.Text>
{Precio}
</Card.Text>
<Button variant="primary">BUY</Button>
</Card.Body>
</Card>
</div>
    </>
    )
}

export default CardIpad
