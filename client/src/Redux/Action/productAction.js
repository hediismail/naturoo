import {POST_PRODUCT ,GET_PRODUCT, DELETE_PRODUCT,PUT_PRODUCT } from "../Const/productConst"
import * as actionTypes from "../Const/productConst"
 import axios from 'axios'

import {addNewProduct,getAllProducts, deleteProducts,updateProducts}   from "../requestproduct"

export const addProductApi=(title, description,rating, imageUrl,conseils, price )=> async (dispatch) =>{
    try{
        const res=await addNewProduct (title, description,rating, imageUrl,conseils, price );
        dispatch ({
            type:POST_PRODUCT,
            payload:res.data
        })
        console.log("payload")
    }
    catch (error) {
              console.log(error);
             }
}
//getALL
export const getProductAPI=()=>async (dispatch)=> {
try{
const res=await getAllProducts ();
dispatch({
    type:GET_PRODUCT,
    payload:res.data
})
}
catch (error) {
              console.log(error);
             }
}

export const deleteProduct = (id)=> async (dispatch) => {
    try {
      await deleteProducts (id);
      dispatch({
        type:DELETE_PRODUCT,
        payload:id
    })
      console.log("delete")
      dispatch(getProductAPI);
    } catch (error) {
      console.log(error);
    }
  };
// update Menu
export const updateProduct = (id,title, description,imageUrl,conseils, price, rating ) => async dispatch => {
    try {
      const res = await axios.put(`http://localhost:4005/app/product/${id}`,{title, description,imageUrl,conseils, price, rating}) 
       
      dispatch({
        type: PUT_PRODUCT, 
        payload: res.data
      });
      console.log("superrr")
    } catch (error) {
      console.log(error);
    }
  };
  export const getProductDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
  
      const res = await axios.get(`http://localhost:4005/app/product/${id}`);
  
      dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };