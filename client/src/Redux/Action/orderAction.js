import {
  ADD_TO_CART,
  ADD_TO_CART_FAIL,
  ADJUST_ITEM_QTY,
  REMOVE_FROM_CART,
  LOAD_CURRENT_ITEM,
  SAVE_ORDER_SUCCESS,
  SAVE_ORDER_FAIL,
  REMOVE_ALL_FROM_CART,
} from '../Const/orderConst'
import axios from 'axios'
import { addOrder } from '../requestOrder'

export const addToCart = (id, qanty) => async (dispatch) => {
  const { data } = await axios.get(`http://localhost:4005/app/product/${id}`)
  // console.log(data)
  try {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        description: data.description,
        imageUrl: data.imageUrl,
        price: data.price,
        rating: data.rating,
        title: data.title,
        _id: data._id,
        qanty: 1,
      },
    })
  } catch (error) {
    dispatch({
      type: ADD_TO_CART_FAIL,
      payload: { error: error },
    })
  }
}

export const removeFromCart = (itemID) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  }
}
export const clearCart = (itemID) => {
  return {
    type: REMOVE_ALL_FROM_CART,
    payload: {
      id: itemID,
    },
  }
}

export const adjustItemQty = (itemID, qty) => {
  return {
    type: ADJUST_ITEM_QTY,
    payload: {
      id: itemID,
      qty: qty,
    },
  }
}
export const loadCurrentItem = (item) => {
  return {
    type: LOAD_CURRENT_ITEM,
    payload: item,
  }
}

export const saveOrder = (orderItems, totalPrice, history) => async (
  dispatch,
) => {
  try {
    const res = await addOrder(orderItems, totalPrice)
    dispatch({
      type: SAVE_ORDER_SUCCESS,
      payload: res.data,
      // payload: {
      //   cart,
      //   totalPrice: totalPrice,
      // },
    })
    history.push('/ordervalidation')
  } catch (error) {
    dispatch({
      type: SAVE_ORDER_FAIL,
      payload: { error: error },
    })
  }
}
