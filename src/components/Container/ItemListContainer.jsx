import React from 'react'
import { useState, useEffect } from 'react'
import products from '../Items/Products'
import ItemList from'../Items/ItemList'
import { useParams } from 'react-router'


const getFetch = new Promise((res)=>{
        setTimeout(()=>{
            res(products)

        },2000)
    
});

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
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
        .finally(()=> console.log('carga completa'))
    }
    else{
        getFetch
        .then(res=>{
            setProductos(res)
        })
        .catch(err=>{
            console.log(err)
        })
        .finally(()=> console.log('carga completa'))

    }
    },[categoriaID]);

    return (
        <div className='container d-flex justify-content-center w-100 '>
            <div className='row'> 
                {
                    <ItemList productos={productos}/>
                }
            </div>
            
        </div>
    )
}

export default ItemListContainer