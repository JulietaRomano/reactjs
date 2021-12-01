import React from 'react'
import { useState } from 'react'


const ItemCount= ({initial,stock, onAdd}) => {

    const [contador,setContador]=useState(initial);
    const [cambiarBoton, setCambiarBoton] = useState(false)
    
    const itemAdd = ()=>{
        contador<=stock ? setContador(contador+1) : console.warn('No hay stock');
    };
    const itemSubstract = ()=>{
        contador===0? alert('No hay items seleccionados'): setContador(contador-1)
    };

 

    const click = ()=>{
        setCambiarBoton(true)
    }

    return <div className='botones'>
                <button href="!#" className="btn btn-primary" onClick={itemAdd}>+1</button>
                {contador}
                <button href="!#" className="btn btn-danger" onClick={itemSubstract}>-1</button>
                { cambiarBoton ?
                <button href="!#" className="btn btn-success" onClick={onAdd}>Ir al carrito</button>
                :  
                <button className="btn btn-outline-primary btn-block" onClick={click} >Agregar</button> 
                }
            </div>
}
export default ItemCount