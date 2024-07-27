import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>My Website</h1>
      <Link to="/">Homepage</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact us</Link>
    </div>
  );
};

export default Header;
