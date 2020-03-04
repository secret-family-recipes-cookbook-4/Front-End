import React from "react";
import { Link } from "react-router-dom";
import Recipes from "../img/Recipes.jpg";

const Navigation = () => {
  return (
    <div className="navigation">
      <div>
        <img className="logo" src={Recipes} alt="recipes logo"/>
      </div>
      <div className="link">
        <Link to="/">Home</Link>
      </div>
      <div className="link">
        <Link to="/about">About</Link>
      </div>
      <div className="link">
        <Link to="/login">Login</Link>
      </div>
      <div className="link">
        <Link to="/registrationForm">Sign Up</Link>
      </div>
      <div className="link">
      <Link to="/recipes">Recipes</Link>
      </div>
    </div>  
  );
}

export default Navigation;
