import { combineReducers } from "redux";
import cryptoReducer from "./crypto/cryptoReducer";

const rootreducer = combineReducers({
    cryptoState:cryptoReducer,
})

export default rootreducer;