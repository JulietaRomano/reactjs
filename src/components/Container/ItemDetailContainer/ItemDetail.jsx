import React from 'react'
import Tarjeta from '../../Items/ItemsCard'

const ItemDetail = ({producto})=>{

    return(
        <>
        {
            <div className='col-md-4' key={producto.id}>
                <Tarjeta titulo={producto.producto} imagen={producto.imagen} precio={producto.precio} id={producto.id}/>
            </div>
        }
        </>
    )
}

export default ItemDetail
