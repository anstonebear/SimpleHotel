import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';

import Root from "./component/Root/Root";
import "./index.css";
import { store } from './store/store';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>
);
