import React from 'react'
import Tarjetas from '../Items/Items'
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = () =>{

    return <>
            <ItemCount initial={0} stock={8}/>
            <Tarjetas/>
        </>
}
export default ItemListContainer