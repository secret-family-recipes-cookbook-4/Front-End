import React from "react";
import { Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";

import "./App.css";

function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/About" component={About} />
      <Route path="/registration" component={RegistrationForm} />
      <Route path="/login" component={LoginForm} />
    </main>
  );
}

export default App;
