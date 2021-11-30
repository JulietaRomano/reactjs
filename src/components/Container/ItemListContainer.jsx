import React from 'react'
import { useState, useEffect } from 'react'
import products from '../Items/Products'
import ItemList from'../Items/ItemList'
import { useParams } from 'react-router'
import Spinner from 'react-bootstrap/Spinner'


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
        if(categoriaID){
            getFetch
        .then(resultado =>{
                setProductos(resultado.filter(prod=> prod.categoria===categoriaID))
        })
        
        .catch(err=>{
            console.log(err)
        })
        .finally(()=> setLoading(false))
    }
    else{
        getFetch
        .then(res=>{
            setProductos(res)
        })
        .catch(err=>{
            console.log(err)
        })
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