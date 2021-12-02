import React, { useState,useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import { getFireStore } from '../../services/getFirestore'



function ItemListContainer() {
     const { categoria } = useParams()
     const [productos, setproductos] = useState([])
     const [cargando, setCargando] = useState(true)
     useEffect(() => {
          setCargando(true);
          if (categoria) {
               const dbQuery = getFireStore()
               dbQuery
               .collection('items')
               .where('categoria','==',categoria)
               .get()
               .then (data => setproductos( data.docs.map(unProducto => ( { id:unProducto.id,...unProducto.data() } )  )))
               .catch (err => console.log (err))
               .finally(()=> setCargando(false));
          } else {
               const dbQuery = getFireStore()
               dbQuery
               .collection('items')
               .get()
               .then (data => setproductos( data.docs.map(unProducto => ( { id:unProducto.id,...unProducto.data() } )  )))
               .catch (err => console.log (err))
               .finally(()=> setCargando(false));
          }
     },[categoria])
     return (
          <>
               {
                    cargando?
                    <Spinner animation="border" role="status" className='spiner'>
                         <span className="visually-hidden"></span>
                    </Spinner>
                    :
                    <div className='shop-container'>
                         <h1> New Seasson</h1>
                         <div className="tarjetas-container">
                              <ItemList productosCompletos={productos}/>
                         </div>
                    </div>
                    
               }
          </>
     )
}
export default ItemListContainer 
