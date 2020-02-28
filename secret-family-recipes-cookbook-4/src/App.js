import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import RegistrationForm from "./components/RegistrationForm";
import RecipeForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";

import "./App.css";

function App() {
  return (
    <main>
      <div>
        <Link to="/Login">Login</Link>
        <Link to="/RegistrationForm">Sign Up</Link>
      </div>
      <Switch>
        <PrivateRoute exact path="/Recipes" component={RecipeForm} />
        <Route path="/RegistrationForm" component={RegistrationForm} />
        <Route path="/Login" component={LoginForm} />
      </Switch>
    </main>
  );
}

export default App;
