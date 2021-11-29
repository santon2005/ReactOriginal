import React from 'react'
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Item = () => {
    return (
        <div className='Item'>
            <Card style={{ width: '18rem' }}>
  <Card.Img src={} />
  <Card.Body>
    <Card.Title>{}</Card.Title>
    <Card.Text>
      {}
    </Card.Text>
    <Button variant="primary">BUY</Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default Item
