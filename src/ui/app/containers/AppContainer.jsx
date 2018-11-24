import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import App from "../components/App"

@inject("store")
@observer
class AppContainer extends Component {
    render() {
        return (
            <App/>
        )
    }
}

export default AppContainer