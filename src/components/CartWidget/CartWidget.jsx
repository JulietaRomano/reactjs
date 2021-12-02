import React,{useContext} from 'react';
import IconCart from './cart2.svg';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
     
     const { itemsCarrito } = useContext(CartContext);
     let addStyle='';
     let boxStyle='';
     if ( itemsCarrito === 0 ) {
          addStyle = {display:"none"}
     } else {
          addStyle = {display:"flex"}
          boxStyle = {backgroundColor:"#e996d0"}
     }
     return (
          <div className="icon-container">
               <img className="icon-carr" style={{boxStyle}} src={IconCart} alt='Imagen de carrito'/>
               <div className="icon-carrContainer" style={{addStyle}}>
                    <p className="carritoItem">{ itemsCarrito }</p>
               </div>
          </div>
     )
}
export default CartWidget
