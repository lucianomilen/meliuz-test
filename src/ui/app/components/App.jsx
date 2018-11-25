import React, { Fragment } from "react";
import SearchbarContainer from "../../searchbar/containers/SearchbarContainer";
import ListContainer from "../../list/containers/ListContainer";

//renders searchbar and list
const App = () => {
  return (
    <Fragment>
      <SearchbarContainer />
      <ListContainer />
    </Fragment>
  );
};

export default App;
