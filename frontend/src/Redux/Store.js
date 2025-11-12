import {createStore,applyMiddleware,compose} from "redux";
import {thunk} from "redux-thunk";
import Reduser from "./Reduser";

const composeEnhance=compose

const store=createStore(Reduser,composeEnhance(applyMiddleware(thunk)))

export default store;