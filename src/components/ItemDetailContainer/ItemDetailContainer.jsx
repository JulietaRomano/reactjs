import React,{useState,useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getFireStore } from '../../services/getFirestore'
function ItemDetailContainer () {
     const { itemId } = useParams()
     const [prod, setProd] = useState({})

     useEffect(() => {
          if (itemId) {
               const dbQuery = getFireStore()
               dbQuery
               .collection('items')
               .doc(`${itemId}`)
               .get()
               .then ( resp => {
                    setProd( { id:resp.id,...resp.data() } )
               })
          }
     },[itemId])
     return (
          <div className="itemDetail">
               {
               <ItemDetail prod={prod}/>
               }
          </div>
     )
}
export default ItemDetailContainer