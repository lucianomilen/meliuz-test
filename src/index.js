import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "mobx-react";

import { MobxRouter, RouterStore, startRouter } from "mobx-router";
import views from "./ui/views";
import DiscoStore from "./stores/DiscoStore";

const store = {
  //store init
  discoStore: new DiscoStore(),
  router: new RouterStore()
};

startRouter(views, store);

//renders single view. supports multiple views via router
ReactDOM.render(
  <Provider store={store}>
    <Fragment>
      <MobxRouter />
    </Fragment>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
