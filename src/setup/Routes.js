import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "../components/Main";
import Resume from "../components/sections/Resume";

const Routes = () => {
  return (
    <Router>
      <Route path="/:path?">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/resume.pdf" component={Resume} />
        </Switch>
      </Route>
    </Router>
  );
};

export default Routes;
