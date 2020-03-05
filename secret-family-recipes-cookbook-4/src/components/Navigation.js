import React from "react";
import { Link } from "react-router-dom";
import Recipes from "../img/Recipes.jpg";

const Navigation = () => {
  return (
    <div className="navigation">
      <div>
        <a href="https://mmcleod.me/Secret-Family-Recipe-Cookbook/index.html">
          <img className="logo" src={Recipes} alt="recipes logo" />
        </a>
      </div>
      <div className="link">
        <a href="https://mmcleod.me/Secret-Family-Recipe-Cookbook/index.html">
          Home
        </a>
      </div>
      <div className="link">
        <a href="https://mmcleod.me/Secret-Family-Recipe-Cookbook/about.html">
          About
        </a>
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
};

export default Navigation;
