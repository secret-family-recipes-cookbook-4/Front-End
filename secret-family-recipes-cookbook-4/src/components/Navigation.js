import React from "react";
import { Link } from "react-router-dom";
import Recipes from "../Logo/Recipes.jpg";

const Navigation = () => {
  return (
    <div>
      <div>
        <img src={Recipes}/>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <Link to="/registrationForm">Sign Up</Link>
      </div>
      <div>
      <Link to="/recipes">Recipes</Link>
      </div>
    </div>  
  );
}

export default Navigation;
