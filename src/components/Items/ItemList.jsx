
 import Tarjeta from './ItemsCard'

 
const ItemCard = ({products})=>{

    return(
        <>
        {
        products.map( productos =>(
            <div className='col-md-4' key={productos.id}>
                <Tarjeta titulo={productos.producto} imagen={productos.imagen} precio={productos.precio}/>
            </div>
            )
        )
        }
        </>
    )
}
export default ItemCard



