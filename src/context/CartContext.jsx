import React,{useContext, createContext, useState} from "react";


export const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext) ;

const CartProvider = ({children}) => {
  
    const [cartList, setCartList] = useState([]);
    const [counter, setCounter] = useState(0); 
    const [totalCart, setTotalCart] = useState(0);

    const totalCartWidget = () => {
        setTotalCart(totalCart + counter)
    };

    const addProduct = (product, counter) => {
      
       if(estaEnCarrito(product)){
        const newCart= cartList;
            newCart.each( productItem=> {
                if(productItem.id===product.id){
                    productItem.counter += counter;
                    return productItem
                }
            });
            setCartList(newCart)
       }
       else{
           setCartList([...cartList,{...product,counter}])
       }
       setTotalCart(totalCart + counter);
        setCounter(0);
        totalPrice();
    }

    const totalPrice = () => {
        return cartList.reduce((acum, valor) => (acum + (valor.counter * valor.price)), 0);
    };

    const removeProduct = (id) =>{
        setCartList(cartList.filter(item => item.id !== id));
    }
    const clearProducts = () =>{
        setCartList([]);
    }

    const estaEnCarrito = (item)=>{
        return cartList.some(cartItem => cartItem.id === item.id)
    }

    
    return<CartContext.Provider value={{
        cartList,
        removeProduct,
        clearProducts,
        addProduct,
        counter,
        setCounter,
        totalPrice,
        totalCartWidget,
        totalCart,
    }}
    >
    {children}
    </CartContext.Provider>
    
}
export default CartProvider