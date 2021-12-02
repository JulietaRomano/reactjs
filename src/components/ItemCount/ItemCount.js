import React,{ useState,useEffect } from "react";



const ItemCount = ({ inicial=1, stock, onAdd }) => {
     
     const [count, setCount] = useState(inicial)

     useEffect(() => {
          setCount(inicial)
     }, [inicial])

     const handleOption = (simbolo) => {
          simbolo===true ?
               count + 1 <= stock ?
                    setCount(count + 1) :
                    alert ('no hay stock')
          :
               count - 1 >= 1 ?
                    setCount(count-1) : 
                    setCount(1)
     }

     return (
          <div className='botones-detail'>
               <button className="btn botones" onClick={() => handleOption(true)}> + </button>
               <label> {count} </label>
               <button className="btn botones" onClick={() => handleOption(false)}> - </button>
               <button className="btn botones" onClick={() => onAdd(count) }> Finalizar compra </button>
          </div>
     );
}
 
export default ItemCount;