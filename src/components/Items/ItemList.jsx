
 import Tarjeta from './ItemsCard'

 
const ItemCard = ({productos})=>{

    return(
        <>
        {
        productos.map( prod =>(
            <div className='col-md-4' key={prod.id}>
                <Tarjeta titulo={prod.producto} imagen={prod.imagen} precio={prod.precio} id={prod.id}/>
            </div>
            )
        )
        }
        </>
    )
}
export default ItemCard



