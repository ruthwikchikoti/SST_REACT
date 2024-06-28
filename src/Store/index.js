import {createStore,applyMiddleware} from 'redux';
import {combineReducers} from 'redux';
import cartReducer from './Cart';
import thunk from 'redux-thunk';
import categoriesReducer from './Categories';

const rootReducer = combineReducers({
    cart: cartReducer,
    categories: categoriesReducer,
});

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;