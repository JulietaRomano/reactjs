import React from 'react'

import { useState } from 'react'

const ItemCount= ({initial,stock,onAdd}) => {

    const [contador,setContador]=useState(initial);
    
    const itemAdd = ()=>{
        if (contador<=stock){
           setContador(contador+onAdd)
        }
       else{ 
           console.warn('No hay stock')
       }
    }
    const itemSubstract = ()=>{
        if(contador===0){
            console.warn('No hay items seleccionados')
        }
        else{
            setContador(contador-1)
        }
    }
    const itemReset = ()=>{
        return setContador(contador-contador)
    }

    return <>
                {contador}
                <button href="!#" onClick={itemAdd}>+1</button>
                <button href="!#" onClick={itemSubstract}>-1</button>
                <button href="!#" onClick={itemReset}>Reset</button>
            </>
}
export default ItemCount