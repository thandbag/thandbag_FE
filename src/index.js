import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import GlobalStyles from "./components/GlobalStyles";
import App from "./shared/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/configureStore";

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
