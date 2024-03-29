import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from "./reducers";

const createStoreWithMiddleware = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

import "./style/main.scss";

import Home from "./components/home";
import Results from "./components/results";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/results" component={Results} />
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
