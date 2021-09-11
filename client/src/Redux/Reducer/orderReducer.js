import * as actionTypes from '../Const/orderConst'

// const initialState = {
//   datas: [],
//   cart: [],
//   currentItem: null,
// }

export const cartReducer = (
  state = { datas: [], cart: [], currentItem: null },
  action,
) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      // const item = state.products.find(
      //   (product) => product.id === action.payload.id
      // );
      const item = action.payload
      // Check if Item is in cart already
      const inCart = state.cart.find((x) => x._id === item._id)
      console.log('Cart', inCart)
      // console.log('incart', inCart)
      if (inCart) {
        return {
          ...state,
          cart: state.cart.map((x) =>
            x._id === action.payload._id ? item : x,
          ),
        }
      } else {
        return {
          ...state,
          cart: [...state.cart, item],
        }
      }

    // return {
    //   ...state,
    //   cart: inCart
    //     ?{...state,cart: state.cart.map((item) =>
    //         item.id === action.payload.id)}
    //           ? { ...item, qty: item.qty + 1 }
    //           : item,

    //     : [...state.cart, { ...item, qty: 1 }],
    // }
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload.id),
      }
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item._id === action.payload.id
            ? { ...item, qanty: action.payload.qty }
            : item,
        ),
      }
      case actionTypes.LOAD_CURRENT_ITEM:
        return {
          ...state,
          currentItem: action.payload,
        }
      case actionTypes.SAVE_ORDER_SUCCESS:
        return {
          ...state,
          order: action.payload,
        }
      default:
        return state
    }
  }
