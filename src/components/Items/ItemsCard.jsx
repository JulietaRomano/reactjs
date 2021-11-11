import React from 'react'
import Card from 'react-bootstrap/Card'


const Cards = ({titulo, imagen, precio}) => {
    return (
        <div>
            <Card className='text-center tarjetas'>
                <Card.Img variant="top" src= {imagen} className='tarjetasImg' />
                <Card.Body>
                    <Card.Title>{titulo}</Card.Title>
                    <Card.Text>${precio}</Card.Text>
                    <button className='btn btn-outline-secondary'>Comprar</button>
                </Card.Body>
            </Card>
        </div>
    )
}


export default Cards