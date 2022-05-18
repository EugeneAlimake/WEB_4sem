import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    const navStyle = {
        color: "white",
        textDecoration: "none"
    }
  return (
    <nav>
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li>First Page</li>
        </Link>
        <Link style={navStyle} to="/secondPage">
          <li>Second Page</li>
        </Link>
        <Link style={navStyle} to="/thirdPage">
          <li>Third Page</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
