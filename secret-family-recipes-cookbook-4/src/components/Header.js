import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  console.log(props);
  return (
    <div>
      <h1>Secret Family Recipes Cookbook 4</h1>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/About">About</Link>
      </div>
      <div>
        <Link to="/Login">Login</Link>
      </div>
      <div>
        <Link to="/RegistrationForm">Sign Up</Link>
      </div>
    </div>
  );
}
