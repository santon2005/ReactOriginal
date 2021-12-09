import React from 'react'
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardIphones.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemCount from '../ItemCount/ItemCount';
import itemDetalle from '../../views/ItemDetalle/itemDetalle';

const CardIphones = ({Imagen, Nombre, Precio}) => {
    const alertProducts = () => {
        toast.success("Agregaste Productos al Carrito")
      
  
    }

    return (
        <div className='Card-iPhone'>
        <Card style={{ width: '18rem' }}>
<Card.Img src={Imagen} />
<Card.Body>
<Card.Title>{Nombre}</Card.Title>
<Card.Text>
{Precio}
</Card.Text>
<Button variant="primary" onClick={alertProducts}>BUY</Button>
<br />
<Button variant="primary" onClick={itemDetalle}>MORE DETAILS</Button>
</Card.Body>
<ToastContainer />
<ItemCount/>
</Card>
</div>
    )
}

export default CardIphones
