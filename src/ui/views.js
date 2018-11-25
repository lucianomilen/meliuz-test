import React from "react";

//models
import { Route } from "mobx-router";

//containers
import AppContainer from "./app/containers/AppContainer";

//single view. could have ditched the router, but decided to keep it to evolve the app eventually
const views = {
  login: new Route({
    path: "/",
    component: <AppContainer />
  })
};

export default views;
