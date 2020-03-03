import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import RegistrationForm from "./components/RegistrationForm";
import RecipeForm from "./components/RegistrationForm";
import Login from "./components/Login";

import "./App.css";

function App() {
  return (
    <main>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/registrationForm">Sign Up</Link>
        <Link to="/recipes">Recipes</Link>
      </div>
      <Switch>
        <PrivateRoute exact path="/recipes" component={RecipeForm} />
        <Route path="/registrationForm" component={RegistrationForm} />
        <Route path="/login" component={Login} />
      </Switch>
      <footer>Photo by Narda Yescas from Pexels</footer>
    </main>
  );
}

export default App;
