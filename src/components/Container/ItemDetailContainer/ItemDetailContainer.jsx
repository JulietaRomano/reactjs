import React,{useState,useEffect} from 'react'
import listaProductos from '../../Items/Products';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router'

const getFetchDetail = new Promise((res,rej)=>{
    const condicion = true;
    if(condicion){
        setTimeout(()=>{
            res(listaProductos)
        },2000)
    }
    else{
        setTimeout(()=>{
            rej(console.warn('error'))
        },2000)
    }

});

function ItemDetailContainer() {
    const[productoInicial,setProductoInicial]= useState([]);
    const {productoID}= useParams()

    useEffect(() =>{
        if(productoID){
            getFetchDetail
            .then(resultado=>{
                setProductoInicial(resultado.find(prod=>prod.id=== parseInt(productoID)))
            })
            .catch(err=>{
                console.warn('error')
            })
        }
        
    },[productoID]);

    return (
        <div>
            <div className='container d-flex justify-content-center w-100 '>
            <div className='row'> 
                {
                    <ItemDetail producto={productoInicial}/>
                }
            </div>
            
        </div>
            
        </div>
    )
}

export default ItemDetailContainer
