import React  from 'react'
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardIpad.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemCount from '../ItemCount/ItemCount';

//import { Item } from 'semantic-ui-react';


const CardIpad = ({Imagen, Nombre, Precio}) => {

  
  const alertProducts = () => {
      toast.success("Agregaste Productos al Carrito")
    

  }
  
  
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
<Button variant="primary" onClick={alertProducts}>BUY</Button>
<ToastContainer />
</Card.Body>
<ItemCount/>
</Card>
</div>
    </>
    )
}

export default CardIpad
