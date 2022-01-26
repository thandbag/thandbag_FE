import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import GlobalStyles from "./components/GlobalStyles";
import App from "./shared/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/configureStore";
import * as serviceWorkerRegistration from './serviceWorkerRegistration'; 
import ReactPWAInstallProvider from "react-pwa-install";


ReactDOM.render(
  <ReactPWAInstallProvider enableLogging>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </ReactPWAInstallProvider>,
  document.getElementById("root")
  
);

serviceWorkerRegistration.register();

reportWebVitals();
