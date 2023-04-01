// import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      {/* <select id="userSelect">
        <option value="paul">Paul </option>
        <option value="michaux">Michaux</option>
        <option value="john-doe">John Doe</option>
      </select> */}
      <ul>
        <li>
          <Link to="/" className="header-links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="header-links">
            About Me
          </Link>
        </li>
        <li>
          <Link to="/projects" className="header-links">
            Projrcts
          </Link>
        </li>
        <li>
          <Link to="/contact-info" className="header-links">
            Contact Info
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Nav;
