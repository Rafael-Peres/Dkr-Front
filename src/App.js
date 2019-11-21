import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import store from "./store";
import Routes from "./routes";

import GlobalStyle from "./styles/global";

const App = () => (
  <Provider store={store}>
    <Fragment>
      <Routes />
      <ToastContainer />
      <GlobalStyle />
    </Fragment>
  </Provider>
);

export default App;
