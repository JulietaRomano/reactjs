import React from 'react'
import { useState, useEffect } from 'react'
import products from '../Items/Products'
import ItemList from'../Items/ItemList'
import { useParams } from 'react-router'
import Spinner from 'react-bootstrap/Spinner'
import { getFiresore } from '../../service/getFirestore'


const getFetch = new Promise((res)=>{
        setTimeout(()=>{
            res(products)

        },2000)
    
});

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoriaID}= useParams()




    useEffect(()=>{

        const dbQuery = getFiresore();     

        if(categoriaID){
            dbQuery.collection('products').where('categoria', '==', categoriaID ).get()
            .then(data =>setProductos(data.docs.map(pro => ( { id: pro.id, ...pro.data() } ))))
            .catch(err=>console.log(err))
            .finally(()=> setLoading(false))
        }
    },[categoriaID]);

    return (
        <div className='container d-flex justify-content-center w-100 '>
           
        { loading ? <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>
           : <div className='row'> <ItemList productos={productos}/></div>
        }
        </div>
    )
}

export default ItemListContainer