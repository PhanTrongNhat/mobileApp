import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import reducerProduct from './products';

const producer = combineReducers({
    products: reducerProduct
});

export default createStore(producer,applyMiddleware(thunk));