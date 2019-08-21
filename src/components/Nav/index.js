import React from "react";
import Link from "redux-first-router-link";

const Nav = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/user/1">User</Link>
  </nav>
);

export default Nav;
