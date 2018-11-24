import React from "react";

//models
import { Route } from "mobx-router";

//containers
import AppContainer from "./app/containers/AppContainer"

const views = {
  login: new Route({
    path: "/",
    component: <AppContainer />
  }),
};

export default views;
