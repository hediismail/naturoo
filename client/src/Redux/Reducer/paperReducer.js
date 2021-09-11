
// const mouna = {
//     datas:[]
// };
//  export const paperReducer = ( state=mouna , action) => {
//     const { type, payload } = action;
//     switch (type){
//       case "GET_ALL_PAPER":
        
//         return {
//           ...state,
//           datas: payload
//         //   loading: false
//         }
        
//     }
//     return state
// };

// export  const paperReducer = (state = mouna, action ) => {
//     const { type, payload } = action;
//     switch( type) {
//         case   "GET_PAPERS_SUCCED":
//             return {
//                 ...state,
//                 datas: payload 
//               }
//             case   "ADD_PAPERS_SUCCED":
//                 return {
//                     ...state,
//                     datas: [...state.papers, payload]
              
//                    }

//     }
// return state
// };

// export  const paperDetailReducer = (state = mouna , action ) => {
//     const { type, payload } = action;
//     switch( type) {
//         case   "GET_DETAIL_PAPER_SUCCED":
//             return {
//                 ...state,
//                 datas: payload 
//               }
//             case   "ADD_DETAIL_PAPER_SUCCED":
//                 return {
//                     ...state,
//                     datas: [...state.papers, payload]
              
//                    }

//     }
// return state
// };
/**************************************second try************* */
import {POST_PAPER,GET_PAPER, DELETE_PAPER, PUT_PAPER} from "../Const/paperConst"
import * as actionTypes from "../Const/paperConst"
const initialState={
  datas : [],
  loading:true
} 

 export const paperReducer = ( state = { datas: [] }, action) => {
  const { type, payload } = action;
  switch (type){
    case GET_PAPER:
      
      return {
        ...state,
        datas: payload,
        loading: false
      };

    case POST_PAPER:
     return {
      ...state,
      datas: [...state.datas, payload]

     
    }
    case DELETE_PAPER:
     return {
       ...state,
       datas: state.datas.filter(
         data => data._id !== payload
       ),
       loading: false
     };
     case PUT_PAPER:
       return {
         ...state,
         datas: state.datas.map(data =>
           data._id === payload._id ? payload : data
         )
       };
 }
  return state
};
  
  export const removePaperDetails = () => (dispatch) => {
    dispatch({ type: actionTypes.GET_PAPER_DETAILS_RESET });
  };