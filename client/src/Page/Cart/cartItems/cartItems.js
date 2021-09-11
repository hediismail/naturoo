import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import DeleteIcon from '@material-ui/icons/Delete'
import { Button } from 'react-bootstrap'
import {
  removeFromCart,
  saveOrder,
  adjustItemQty,
} from '../../../Redux/Action/orderAction'
import '../panier.css'

const CartItems = ({ item }) => {
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalItems, setTotalItems] = useState(0)
  const [qty, setQty] = useState(1)
  const dispatch = useDispatch()
  useEffect(() => {
    let items = 0
    let price = 0

    items += Number(item.qanty)
    price += item.qanty * item.price

    setTotalItems(items)
    setTotalPrice(price)
    dispatch(adjustItemQty(item._id, qty))
  }, [qty, totalPrice, totalItems, setTotalPrice, setTotalItems])
  return (
    <div>
      <div key={item.id}>
        <div className="table-row">
          <td className="col col-3">{item.title}</td>
          <td className="col col-1">{item.price}</td>
          <td>
            <img className="col col-4" src={item.imageUrl} alt="" />
          </td>
       <td  className="col col-1" >
          <input className="input"
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={qty}
            // onChange={onChangeHandler}

            onChange={(e) => {
              setQty(e.target.value)
              dispatch(adjustItemQty(item._id, qty))
            }}
          />
  </td>
          <td className="col col-2">{item.price * item.qanty}
       </td>
       <td>
            <Button className="col col-2">
              <DeleteIcon
                onClick={() => dispatch(removeFromCart(item._id))}
                className="deletoneitem"
              />
            </Button>
            
          </td>
          
       
        </div>
        </div>
        </div>
  )
}

export default CartItems