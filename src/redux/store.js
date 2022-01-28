import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootreducer from "./RootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootreducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
