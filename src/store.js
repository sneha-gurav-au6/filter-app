import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import windowReducer from "./redux/reducers/windowReducer";
import thunk from "redux-thunk";

//store to manage state of app
const store = createStore(
    windowReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
export default store;
