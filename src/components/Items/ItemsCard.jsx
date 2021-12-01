import React,{ useState } from 'react';
import Card from 'react-bootstrap/Card'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'
import { useCartContext } from '../../context/CartContext';


const Cards = ({titulo, imagen, precio,id, prod }) => {

    const [clicked, setclicked] = useState(false);
    const { addToCart } = useCartContext();

    let available = 10;

    const handleAdd = (counter) => {
        return (evt) => {
            evt.stopPropagation();
            if (counter <= available && counter > 0) {
                addToCart(prod, counter);
                setclicked(true);
            }
            else alert("Por favor quite items");
        }
    }



    return (
        <div>
            <Card className='text-center tarjetas'>
                <Card.Img variant="top" src= {imagen} className='tarjetasImg' />
                <Card.Body>
                    <Card.Title>{titulo}</Card.Title>
                    <Card.Text>${precio}</Card.Text>
                    {clicked ? 
                    <button href="!#" className="btn btn-primary">Ir al carrito</button>
                    : <ItemCount initial={1} stock={9} onAdd={handleAdd} {...{ available }}/>}
                    <Link to={`detail/${id}`}>
                    <button className='btn btn-outline-secondary'>Detalle</button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}


export default Cards