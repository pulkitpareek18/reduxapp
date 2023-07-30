import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

const reducer = combineReducers({
    amount: amountReducer
})
export default reducer