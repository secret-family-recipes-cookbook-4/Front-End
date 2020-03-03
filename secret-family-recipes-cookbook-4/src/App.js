import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import RegistrationForm from "./components/RegistrationForm";
import RecipeForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import Navigation from "./components/Navigation";

import "./App.css";

function App() {
  return (
    <main>
      <div>
        <Navigation />
      </div>
      <Switch>
        <PrivateRoute exact path="/recipes" component={RecipeForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/registrationForm" component={RegistrationForm} />
        <Route component={LoginForm} />
        <Route component={RegistrationForm} />
      </Switch>
      <footer>Photo by Narda Yescas from Pexels</footer>
    </main>
  );
}

export default App;
