import React from 'react'
import { useState } from 'react'

const ItemCount= ({initial,stock, onAdd}) => {

    const [contador,setContador]=useState(initial);
    
    const itemAdd = ()=>{
        contador<=stock ? setContador(contador+1) : console.warn('No hay stock')
    };
    const itemSubstract = ()=>{
        contador===0? alert('No hay items seleccionados'): setContador(contador-1)
    };

    return <div className='botones'>
                <button href="!#" className="btn btn-primary" onClick={itemAdd}>+1</button>
                {contador}
                <button href="!#" className="btn btn-danger" onClick={itemSubstract}>-1</button>
                <button href="!#" className="btn btn-success" onClick={() => onAdd(contador)}>Agregar</button>
            </div>
}
export default ItemCount