import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import App from "./App";
import rootReducer from "./reducers";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
