import React,{ useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { Table, Button, Form, Container, Col } from "react-bootstrap";
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
     const [nombreCompleto, setNombreCompleto] = useState('')
     const [telefono, setTelefono] = useState('')
     const [email, setEmail] = useState('')
     const [email2, setEmail2] = useState('')

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
     const validateDates = () =>{
          let aux;
          if ((email.toUpperCase()===email2.toUpperCase() && email!=='') && telefono!=='' && nombreCompleto!== '') {
               aux=true;
          } else {
               aux=false;
          }
          return aux;
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
                         <hr />
                         <p className="mb-0">
                              RESUMEN DE TUS DATOS <br/>
                              Nombre: {nombreCompleto} <br/>
                              Teléfono: {telefono} <br/>
                              Email: {email} <br/>
                              <b> Codigo de verificación de la compra {idCompra} </b> <br/>
                         </p>
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



                                        <hr className="my-4"/>
                                        <Container fluid className="d-flex justify-content-center">
                                             <Col md={4} className="border border-secondary m-3 p-3">
                                                  <h4>Datos del Comprador</h4>
                                                  <hr className="my-4"/>
                                                  <Col md={12} className="p-2 d-flex justify-content-center">
                                                       <Form >
                                                            <Form.Group className="xs mb-3" controlId="formBasicName">
                                                                 <Form.Label className="text-center"><small>Ingrese su nombre</small></Form.Label>
                                                                 <Form.Control className="text-center" type="text" placeholder="Juana Romano" value={nombreCompleto} onChange={event=>setNombreCompleto(event.target.value)}/>
                                                            </Form.Group>
                                                            <Form.Group className="md mb-3" controlId="formBasicPhone">
                                                                 <Form.Label className="text-center"><small>Ingrese su Telefono</small></Form.Label>
                                                                 <Form.Control className="md text-center" type="text" placeholder="xx-xxxx-xxxx" value={telefono} onChange={event=>setTelefono(event.target.value)} />
                                                            </Form.Group>
                                                            <Form.Group className="xs mb-3" controlId="formBasicEmail">
                                                                 <Form.Label className="text-center"><small>Ingrese su Email</small></Form.Label>
                                                                 <Form.Control className="xs text-center" type="text" placeholder="juanar@gmail.com" value={email} onChange={event=>setEmail(event.target.value)}/>
                                                            </Form.Group>
                                                            <Form.Group className="xs mb-3" controlId="formBasicEmail2">
                                                                 <Form.Control className="xs text-center" type="text" placeholder="juanar@gmail.com" value={email2} onChange={event=>setEmail2(event.target.value)}/>
                                                            </Form.Group>
                                                       </Form>    
                                                  </Col>  
                                             </Col>
                                        </Container>
                                        <Button variant="btn botones" onClick={ () => {
                                             if (validateDates()) {
                                                  ordenDeCompra()
                                             } else {
                                                  // pushea el render al link /error
                                                  alert('/Error');
                                             }}}>Finalizar la compra
                                        </Button>

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