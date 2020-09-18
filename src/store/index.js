import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import reducerToDo from "./reducerToDo";
import reducerDo2 from "./reducerDo2";

import thunk from 'redux-thunk'

let reducer = combineReducers({reducerToDo, reducerDo2})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(
    reducer,
    enhancer,
    // applyMiddleware(thunk)//如果不用调试工具
);


export default store;