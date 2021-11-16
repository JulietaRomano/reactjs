import React from 'react'
import { useState, useEffect } from 'react'
import products from '../Items/Products'
import ItemList from'../Items/ItemList'
import { useParams } from 'react-router'


const getFetch = new Promise((res,rej)=>{
        setTimeout(()=>{
            res(products)

        },2000)
    
});

const ItemListContainer = () => {
    const [products, setProductos] = useState([]);
    const {categoriaID}= useParams()
    console.log(categoriaID)

    useEffect(()=>{
        getFetch
        .then(resultado =>{
                setProductos(resultado)
        })
        .catch(err=>{
            console.log(err)
        })
        .finally(()=> console.log('carga completa'))
    },[]);

    return (
        <div className='container d-flex justify-content-center w-100 '>
            <div className='row'> 
                {
                    <ItemList products={products}/>
                }
            </div>
            
        </div>
    )
}

export default ItemListContainer