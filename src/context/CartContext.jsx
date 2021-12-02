import React,{createContext,useState,useEffect} from "react";
export const CartContext = createContext ([]);


const CartContextProvider = ({children}) => {

     const [carList, setCarList] = useState([]);
     const [montoTotal, setMontoTotal] = useState(0);
     const [itemsCarrito, setItemsCarrito] = useState(0);

     useEffect(() => {
          cantCarrito()
          // eslint-disable-next-line
     }, [carList])

     //Suma
     const SumaCart = (item,count) => {
          const newCarList=[];
          carList.forEach(element => {
               if (element.id !== item.id) {
                    newCarList.push(element)
               } else {
                    if (element.cantidad+count <= element.stock) {
                         element.cantidad+=count;
                         newCarList.push(element);
                         setCarList(newCarList);
                    } else {
                         element.cantidad=element.stock;
                         newCarList.push(element);
                         setCarList(newCarList);
                    }
               }
          })
     }
     const cantCarrito = () => {
          let acum=0;
          carList.forEach(element => {
               acum+=element.cantidad; 
          });
          setItemsCarrito(acum);
     }
     //Agregar al carrito

     const agregaCarrito=(item,count)=> {
          const indexItem = carList.findIndex(unProducto => unProducto.id === item.id)
          if (indexItem === -1) {
               console.log ('agregué un producto')
               setCarList([...carList,item])
          } else {
               console.log ('sumé un producto')
               SumaCart(item,count)
          }
          console.log (carList);
     }

     //Remover item
     const removeItem =(id)=>{
          setCarList (carList.filter(unItem => unItem.id !== id ));
     }

     //Limpiar carrito
     const clearCarrito =()=>{
          setCarList([]);
     }

     //Total de la compra
     const totalCompra=()=> {
          let acum=0;
          carList.forEach(elemento => {
               acum+=elemento.precio*elemento.cantidad;
          });
          setMontoTotal(acum);
          return montoTotal;
     }

     
     return (
          <CartContext.Provider value={{
               carList,
               montoTotal,
               itemsCarrito,
               setCarList,
               agregaCarrito,
               removeItem,
               clearCarrito,
               totalCompra
          }}>
               {children}
          </CartContext.Provider>
     )
}

export default CartContextProvider
