import React from "react";
import ReactDOM from "react-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
ReactDOM.render(
    <React.StrictMode>
        {/* for nevigation purpose in app router included*/}
        <Router>
            {/* connecting redux with react by adding store*/}
            <Provider store={store}>
                {/* application starts from app which is further injected in index.html*/}
                <App />
            </Provider>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
