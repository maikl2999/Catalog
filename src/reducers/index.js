import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import priceReducer from './priceReducer';
import sortReducer from './sortReducer';
import paginationReducer from './paginationReducer';
import numberProductsReducer from './numberProductsReducer';

export default combineReducers({
    products: productsReducer,
    price: priceReducer,
    sort: sortReducer,
    page: paginationReducer,
    numberProducts: numberProductsReducer
});