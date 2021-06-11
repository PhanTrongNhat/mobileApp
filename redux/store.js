import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import reducerProduct from './products';
import reducerCart from './cart';
const producer = combineReducers({
    products: reducerProduct,
    cart : reducerCart
});

export default createStore(producer,applyMiddleware(thunk));