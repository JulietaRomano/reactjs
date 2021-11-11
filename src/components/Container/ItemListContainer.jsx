import React from 'react'
import { useState, useEffect } from 'react'
import products from '../Items/Products'
import ItemList from'../Items/ItemList'

const getFetch = new Promise((res,rej)=>{
    const condicion = true;
    if (condicion){
        setTimeout(()=>{
            res(products)

        },2000)
    }
    else{
        setTimeout(()=>{
            rej('error')
        },2000)
    };
});

const ItemListContainer = () => {
    const [products, setProductos] = useState([]);
    useEffect(()=>{
        getFetch
        .then(resultado =>{
                setProductos(resultado)
        })
        .catch(err=>{
            console.log(err)
        })
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