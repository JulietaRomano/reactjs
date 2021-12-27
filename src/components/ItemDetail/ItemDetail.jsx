import React,{useState,useEffect,useContext} from "react";
import {Card}from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom'
import { CartContext } from "../../context/CartContext"


const ItemDetail = ({prod}) => {
     const [stock,setStock] = useState(0)
     const {agregaCarrito} = useContext(CartContext)
     const [cargando, setCargando] = useState(true)
     const [clicked,setClicked] = useState(false)
    
     useEffect(() => {
          setStock(parseInt(prod.stock));
          setCargando(false)
     }, [prod])

     function onAdd (count) {
          agregaCarrito({...prod, cantidad: count},count);
          setClicked(true);
     }

     return (
          <>
          {
               !cargando? 
                    <Card className="tarjeta-detail" style={{ width: '50rem' }}>
                         <Card.Img variant="top" className="img-detail" src={prod.imagen} />
                         <Card.Body>
                              <Card.Title>{prod.producto}</Card.Title>
                              <Card.Title>Precio: $ {prod.precio} </Card.Title>
                              <Card.Text>
                                   {prod.descripcion}
                              </Card.Text>
                              {
                                   clicked ? (
                                   <>
                                        <div className="irCarrito">
                                             <Link to="/">
                                                  <button className="btn botones"> Seguir comprando </button>
                                             </Link>
                                             <Link to="/cart">
                                                  <button className="btn botonVerde"> Ir al carrito </button>
                                             </Link>
                                        </div>
                                   </>
                                   )
                                   : (
                                        <ItemCount initial={1} stock={stock} onAdd={onAdd}/>
                                   )
                              }
                         </Card.Body>
                    </Card>
               :
               <h2>cargando</h2>
          }
          </>

     )
}
export default ItemDetail
