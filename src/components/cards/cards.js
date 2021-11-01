import React from 'react'
import Tarjeta from './card'
import image1 from'../assets/traje1.jpg'
import image2 from'../assets/traje2.jpg'
import image3 from'../assets/traje3.jpg'


const cardArray = [
    {
        producto:'Blaizer',
        id:1,
        imagen: image1,
        precio: 6000,

    },
    {
        producto:'Campera',
        id:2,
        imagen: image2,
        precio: 8000,
    },
    {
        producto:'Pantalon',
        id:3,
        imagen: image3,
        precio: 4500,
    }
];


const Cards = () => {
    return (
        <div className='container d-flex justify-content-center w-100 '>
            <div className='row'> 
                {
                    cardArray.map( card =>(
                        <div className='col-md-4' key={card.id}>
                            <Tarjeta titulo={card.producto} imagen={card.imagen} precio={card.precio}/>
                        </div>
                    ))
                }
            </div>
            
        </div>
    )
}

export default Cards