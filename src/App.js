import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Genres from "./components/Genres";
import Games from "./components/Games";
import Card from "./components/Card";
import E404 from "./components/E404";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect from="/" to="/genres" exact />
          <Route path="/genres" component={Genres} exact />
          <Route path="/games/:slug" component={Games} exact />
          <Route path="/games/:slug/:id" component={Card} exact />
          <Route path="**" component={E404} exact />
        </Switch>
      </Router>
    );
  }
}

export default App;
