import {createStore, combineReducers, applyMiddleware, compose} from "redux"
import magazine from "./modules/magazine"
import thunk from "redux-thunk"


const middlewares = [thunk]
const rootReducer = combineReducers({magazine})
const enhancer = applyMiddleware(...middlewares)

const store = createStore(rootReducer, enhancer)

export default store