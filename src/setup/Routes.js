import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../components/Home";

const Routes = () => {
  return (
    <Router>
      <Route path="/:path?">
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Route>
    </Router>
  );
};

export default Routes;
