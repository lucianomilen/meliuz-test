import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "mobx-react";

import { MobxRouter, RouterStore, startRouter } from "mobx-router";
import views from "./ui/views";
import UserStore from "./stores/UserStore";

const store = {
  userStore: new UserStore(),
  //here's how we can plug the routerStore into our store
  router: new RouterStore()
};

startRouter(views, store);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <MobxRouter />
    </div>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
