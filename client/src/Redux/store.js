import { thunk } from "redux-thunk";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { appDetailReducer, appListReducer } from "./reducers/appReducers";
import { websiteDetailReducer, websiteListReducer } from "./reducers/websiteReducers";

const initialState = {};
const reducer = combineReducers({
    appLists: appListReducer,
    appDetails: appDetailReducer,
    websiteList: websiteListReducer,
    websiteDetails: websiteDetailReducer 
});

const composeEnhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhance(applyMiddleware(thunk))
);

export default store;