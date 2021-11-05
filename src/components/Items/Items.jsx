import React from 'react'
import { useState, useEffect } from 'react'
import {getFetch} from './getFetch'
import ItemList from './ItemList';


const Items = () => {
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

export default Items