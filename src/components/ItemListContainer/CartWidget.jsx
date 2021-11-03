import React from 'react'
import carritoImg from'../assets/carrito.png'
import { useState } from 'react'

const CartWidget= () => {
    const [contador,setContador]=useState(0);

    return <>
                <img src = {carritoImg} alt="carrito" width='40'/>
                {contador}
                <button href="!#" onClick={()=>{setContador(contador+1)}}>+1</button>
                <button href="!#" onClick={()=>{setContador(contador-1)}}>-1</button>
                <button href="!#" onClick={()=>{setContador(contador-contador)}}>Reset</button>
            </>
}
export default CartWidget