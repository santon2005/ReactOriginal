import React from 'react'
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardIphones.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";

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
<Link to="/DetalleProducto"  className='a' onClick={alertProducts}>MORE DETAILS</Link>
<br />
</Card.Body>
<ToastContainer />
<ItemCount/>
</Card>
</div>
    )
}

export default CardIphones
