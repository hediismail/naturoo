import { createStore,  applyMiddleware} from 'redux';
import { rootReducer } from './Reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

// const reducer = combineReducers({
//     Auth: userReducer,
   
  
   
//   });


const middleware = [thunk];

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(...middleware))
    );


export default store;