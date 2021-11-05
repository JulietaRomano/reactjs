import image1 from'../assets/traje1.jpg'
import image2 from'../assets/traje2.jpg'
import image3 from'../assets/traje3.jpg'
 

const listaProductos =   [
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

export const getFetch = new Promise((res,rej)=>{
    const condicion = true;
    if (condicion){
        setTimeout(()=>{
            res(listaProductos)
        },2000)
    }
    else{
        setTimeout(()=>{
            rej('error')
        },2000)
    };
})


