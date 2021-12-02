import React,{memo} from "react";
import Item from "../Item/Item"


const ItemList = memo (
     ({productosCompletos}) => {
          return (
               <>
                    {productosCompletos.map(producto  => <Item products={producto} key={producto.id}/>)}
               </>
          )
     }
     ,(ant,post) => ant.productosCompletos.length === post.productosCompletos.length )
export default ItemList;


