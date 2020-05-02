import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./Store/Modules";

import "bootstrap/dist/css/bootstrap.min.css";

const store = createStore(rootReducer);
console.log("index.js");
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
