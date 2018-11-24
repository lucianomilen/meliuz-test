import React, { Component } from "react";
import views from "../../views";
import { inject, observer } from "mobx-react";
import { action, observable } from "mobx";
import Login from "../components/Login";

@inject("store")
@observer
class LoginContainer extends Component {
  @observable email = "";
  @observable password = "";

  store = this.props.store;

  verifyAccess() {
    if (this.store.userStore.verifyAccess(this.email, this.password))
      this.store.router.goTo(views.success);
  }

  @action
  setEmail(email) {
    this.email = email;
  }

  @action
  setPassword(password) {
    this.password = password;
  }

  render() {
    return (
      <Login
        setEmail={email => this.setEmail(email)}
        setPassword={password => this.setPassword(password)}
        verifyAccess={() => this.verifyAccess()}
      />
    );
  }
}

export default LoginContainer;
