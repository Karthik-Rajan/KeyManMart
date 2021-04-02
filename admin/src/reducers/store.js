import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
// import  { Auth }  from '../middleware/auth'
const middleware = [thunk];


const store = createStore(rootReducer, applyMiddleware(...middleware));

// log
store.subscribe(() => { console.log('logger - ', store.getState()) });

export default store;
