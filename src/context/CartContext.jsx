import React, { useContext, useState } from 'react';

export const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

export default function CartProvider({ children, defaultCart }) {
    const [cart, setCart] = useState([]);
    const [cantItems, setcantItems] = useState(0);


    function addToCart(item, qnt) {

        if (cart.length !== 0) {
            let aux = cart.findIndex(obj => { return obj.item.id === item.id; })
            if (aux !== -1) {
                const newCart = cart;
                newCart[aux].cant = newCart[aux].cant + qnt;
                setCart(newCart);
            }
            else setCart([...cart, { item, cant: qnt }]);
        }
        else setCart([{ item, cant: qnt }]);

        setcantItems(cantItems + qnt);
    }

    function removeFromCart(itemID, qnt) {
        setCart(cart.filter(obj => obj.item.id !== itemID));
        setcantItems(cantItems - qnt);
    }

    function clearCart() {
        setCart(defaultCart);
        setcantItems(0);
    }

    return <CartContext.Provider value={{ cart, cantItems, addToCart, removeFromCart, clearCart }}> {children}
    </CartContext.Provider>
}