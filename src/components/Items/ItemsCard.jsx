import React from 'react'
import Card from 'react-bootstrap/Card'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'
const Cards = ({titulo, imagen, precio,id}) => {
    return (
        <div>
            <Card className='text-center tarjetas'>
                <Card.Img variant="top" src= {imagen} className='tarjetasImg' />
                <Card.Body>
                    <Card.Title>{titulo}</Card.Title>
                    <Card.Text>${precio}</Card.Text>
                    <ItemCount/>
                    <Link to={`detail/${id}`}>
                    <button className='btn btn-outline-secondary'>Detalle</button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}


export default Cards