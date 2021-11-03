import React from 'react'
import Tarjetas from '../Cards/cards'
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = () =>{
   
    return <>
            <ItemCount initial={0} stock={8} onAdd={1}/>
            <Tarjetas/>
        </>
}
export default ItemListContainer