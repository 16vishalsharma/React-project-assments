
import checkoutReducer from './Checkout/item.reducers'
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    cart: checkoutReducer
});

export default rootReducer;