import {fetchAllPapers} from "../request"
//getALL
// export const getAllPapers=()=>async (dispatch)=> {
// try{
// const res= await fetchAllPapers()

// dispatch({
//     type:"GET_PAPER",
//     payload:res.data
// })
// }
// catch (error) {
//               console.log(error);
//              }
// }

/**********try 1****** */
// export function getAllPapers() {
//     return dispatch => {
//         fetchAllPapers()
//         .then (papers =>dispatch (
//             {type: "GET_PAPERS_SUCCED",payload: papers}) 
//         )
//         .catch(err=>dispatch( {
//             type: "GET_PAPERS_FAILED",
//             payload: err
//           }))
//     }

// }

// export function getDetailPaper() {
//     return dispatch => {
//         fetchAllPapers()
//         .then (papers =>dispatch (
//             {type: "GET_DETAIL_PAPER_SUCCED",payload: papers}) 
//         )
//         .catch(err=>dispatch( {
//             type: "GET_DETAIL_PAPER_FAILED",
//             payload: err
//           }))
//     }

// }
/**********try 2************************* */

import {POST_PAPER ,GET_PAPER, DELETE_PAPER,PUT_PAPER } from "../Const/paperConst"
import * as actionTypes from "../Const/paperConst"
 import axios from 'axios'

import {addNewPaper,getAllPapers, deletePapers,updatePapers}   from "../request"

export const addPaperApi=(titre, contenu,image,catégorie )=> async (dispatch) =>{
    try{
        const res=await addNewPaper (titre, contenu,image,catégorie);
        dispatch ({
            type:POST_PAPER,
            payload:res.data
        })
        console.log("payload")
    }
    catch (error) {
              console.log(error);
             }
}
//getALL
export const getPaperAPI=()=>async (dispatch)=> {
try{
const res=await getAllPapers ();
dispatch({
    type:GET_PAPER,
    payload:res.data
})
}
catch (error) {
              console.log(error);
             }
}

export const deletePaper = (id)=> async (dispatch) => {
    try {
      await deletePapers (id);
      dispatch({
        type:DELETE_PAPER,
        payload:id
    })
      console.log("delete")
      dispatch(getPaperAPI);
    } catch (error) {
      console.log(error);
    }
  };
// update Menu
export const updatePaper = (id,titre, contenu,image,catégorie ) => async dispatch => {
    try {
      const res = await axios.put(`http://localhost:4005/app/paper/${id}`,{titre, contenu,image,catégorie}) 
       
      dispatch({
        type: PUT_PAPER, 
        payload: res.data
      });
      console.log("superrr")
    } catch (error) {
      console.log(error);
    }
  };
  export const getPaperDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_PAPER_DETAILS_REQUEST });
  
      const res = await axios.get(`http://localhost:4005/app/paper/${id}`);
  
      dispatch({
        type: actionTypes.GET_PAPER_DETAILS_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_PAPER_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };