import React,{ useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { Table, Button} from "react-bootstrap";
import Alert from 'react-bootstrap/Alert'
import { Link } from 'react-router-dom';
import { getFireStore } from '../../services/getFirestore'
import firebase from 'firebase'
import 'firebase/firestore'

function Cart() {
     const {carList,removeItem,clearCarrito,totalCompra,montoTotal} = useContext(CartContext);
     const [contiene, setContiene] = useState(false)
     const [alerta, setAlerta] = useState(false)
     const [idCompra,setIdCompra] = useState('')

     //Remover item
     const handleRemove=(id)=>{
          removeItem(id);
     }

     //Limpiar carrito
     const handleRemoveAll=()=>{
          clearCarrito()
     }
     const contieneCarList = () => {
          carList.length === 0 ? setContiene(false) :  setContiene(true);          
     }

     const ordenDeCompra=()=>{
          const orden={};
          orden.date = firebase.firestore.Timestamp.fromDate(new Date());       
          orden.total = montoTotal;
          orden.items = carList.map(element => {
               const id = element.id;
               const titulo = element.producto;
               const precio = element.precio * element.cantidad;
               return {id, titulo, precio}
          })

          const dbQuery = getFireStore()
          dbQuery.collection('orders').add(orden)
          .then ( response => {
               setIdCompra(response.id)
               setAlerta(true);
          })
          .catch (err=> console.log (err))
          .finally (()=> console.log ('orden finalizada'));
          console.log (orden);
     }


     useEffect(() => {
           contieneCarList();
          totalCompra();
          // eslint-disable-next-line
     }, [handleRemove,handleRemoveAll,contiene])
     

     return (
          <>
               {  
                    alerta?
                    <Alert variant="success">
                         <Alert.Heading> Transaccion exitosa</Alert.Heading>
                         <p>Gracias por tu compra</p>
                         <Link to ="/"><button className='btn botones'>Ir a la pagina principal </button></Link>
                    </Alert> :
                    <div className='carrito'>
                         <h1 className='carritoTittle'>Carrito de compras</h1>
                         {
                              contiene === true? (   
                                   <>
                                        <Table striped bordered hover>
                                             <thead>
                                                  <tr>
                                                       <th>Artículo</th>
                                                       <th>Cantidad</th>
                                                       <th>Precio</th>
                                                       <th>subTotal</th>
                                                  </tr>
                                             </thead>
                                             <tbody>
                                                  {carList.map( (item) =>
                                                       <tr key={item.id}>
                                                            <td>{item.producto}</td>
                                                            <td>{item.cantidad}</td>
                                                            <td>{item.precio}</td>
                                                            <td>{item.precio*item.cantidad}</td>
                                                            <td>
                                                                 <Button variant="outline-danger" onClick={()=>handleRemove(item.id)}>X</Button>{' '}
                                                            </td>
                                                       </tr>
                                                  )}
                                                  <tr key='555'>
                                                       <td></td>
                                                       <td></td>
                                                       <td></td>
                                                       <td>Total</td>
                                                       <td> <strong> $ {montoTotal} </strong> </td>
                                                       <td></td>
                                                  </tr>
                                             </tbody>
                                        </Table>
                                        <Button variant="btn vaciarCarr" onClick={()=>handleRemoveAll()}> Vaciar Carrito </Button>
                                        <Button variant="btn botones" onClick={()=>ordenDeCompra()}> Finalizar la compra </Button>
                                   </>    
                              ) : <>
                                        <h2>El carrito se encuentra vacío</h2>
                                        <p>
                                             <Link to ="/" className='btn botones'> Ir a la pagina principal</Link> para sumar productos al carrito
                                        </p>
                                   </>
                         }
                    </div>
               }
          </>
     )
}
export default Cart;