import { createStore, applyMiddleware, combineReducers } from "redux";
import {thunk} from "redux-thunk";
import rootReducer from "./Store/Cart.js";

const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    payload: product
  };
}

export function removeFromCart(product) {
  return {
    type: REMOVE_FROM_CART,
    payload: product
  };
}

function cartReducer(state = { items: {} }, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const product = action.payload;
      return {
        ...state,
        items: {
          ...state.items,
          [product.id]: {
            ...state.items[product.id],
            quantity: state.items[product.id] ? state.items[product.id].quantity + 1 : 1
          }
        }
      };
    }
    case REMOVE_FROM_CART: {
      const product = action.payload;
      if (state.items[product.id].quantity <= 1) {
        const { [product.id]: removedItem, ...restItems } = state.items;
        return {
          ...state,
          items: restItems
        };
      } else {
        return {
          ...state,
          items: {
            ...state.items,
            [product.id]: {
              ...state.items[product.id],
              quantity: state.items[product.id].quantity - 1
            }
          }
        };
      }
    }
    default:
      return state;
  }
}

const combinedReducers = combineReducers({
  cart: cartReducer,
  root: rootReducer,
});

const store = createStore(
  combinedReducers,
  applyMiddleware(thunk)
);

export default store;