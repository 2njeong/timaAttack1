import { createStore } from "redux";
import { combineReducers } from "redux";
import { setInput } from "../modules/input";
import { calculator } from "../modules/calculator";

const rootReducer = combineReducers({ setInput, calculator });
const store = createStore(rootReducer);

export default store;
