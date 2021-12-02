import React from "react";
import {Card, Button} from "react-bootstrap"
import { Link } from 'react-router-dom'


function Item({products}) {
          return (
               <>
                    <Link to={`/item/${products.id}`} className="tarjetaInicio">
                         <Card className='text-center'>
                         <Card.Img variant="top" src= {products.imagen} className='tarjetasImg' />
                         <Card.Body>
                              <Card.Title>{products.producto}</Card.Title>
                         <Button className='btn botones'>Ver detalle</Button>
                         </Card.Body>
                          </Card>
                    </Link>
               </>
          )
}
export default Item;
