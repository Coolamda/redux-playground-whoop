import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Typography from "typography";
import funstonTheme from "typography-theme-funston";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import postsReducer from "./reducers/postsReducer";

funstonTheme.baseFontSize = "18px";
const typography = new Typography(funstonTheme);

typography.injectStyles();

const rootReducer = combineReducers({
  posts: postsReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
