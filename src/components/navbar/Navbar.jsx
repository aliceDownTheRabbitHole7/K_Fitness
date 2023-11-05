import React, { useState } from "react";
import { Link } from "react-router-dom";
import navbarData from "../../data/navbarData";
import "./navbar.css";
import * as FaIcons from "react-icons/fa6";

function Navbar() { 
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => {
    setSidebar(!sidebar)
  }

  const navbarMap = navbarData.map((navItem, i) => {
    return (
      <li className="nav-link" key={i}>
        <Link to={navItem.path} className="nav-anchor">
          {navItem.icon}
          <span className="nav-text">{navItem.text}</span>
        </Link>
      </li>
    )
  })

  return (
    <header>
      <div className="nav-container">
        <Link to='#' className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to='#' className="menu-bars">
              <FaIcons.FaCircleXmark />
            </Link>
          </li>
          {navbarMap}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
