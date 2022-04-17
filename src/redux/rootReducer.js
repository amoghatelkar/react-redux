import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducers";
import donutReducer from "./donuts/donutReducer";
import iceCreaReducer from "./iceCream/iceCreamReducer"
import userReducer from "./user/UserReducer";

const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreaReducer,
    donut : donutReducer,
    user : userReducer
})

export default rootReducer