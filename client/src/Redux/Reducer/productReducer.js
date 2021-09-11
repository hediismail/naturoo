import {POST_PRODUCT,GET_PRODUCT, DELETE_PRODUCT, PUT_PRODUCT} from "../Const/productConst"
import * as actionTypes from "../Const/productConst"
const initialState={
  datas : [],
  loading:true
} 

 export const productReducer = ( state = { datas: [] }, action) => {
  const { type, payload } = action;
  switch (type){
    case GET_PRODUCT:
      
      return {
        ...state,
        datas: payload,
        loading: false
      };

    case POST_PRODUCT:
     return {
      ...state,
      datas: [...state.datas, payload]

     
    }
    case DELETE_PRODUCT:
     return {
       ...state,
       datas: state.datas.filter(
         data => data._id !== payload
       ),
       loading: false
     };
     case PUT_PRODUCT:
       return {
         ...state,
         datas: state.datas.map(data =>
           data._id === payload._id ? payload : data
         )
       };
 }
  return state
};
  
  export const removeProductDetails = () => (dispatch) => {
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_RESET });
  };