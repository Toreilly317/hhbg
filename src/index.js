import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "./index.css";

import registerServiceWorker from "./registerServiceWorker";

//components
import App from "./app/layout/App";
import ScrollToTop from "./app/common/util/ScrollToTop";

import configureStore from "./app/store/configureStore";

//npm modules
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const store = configureStore();
const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>,
  rootEl
);

registerServiceWorker();
