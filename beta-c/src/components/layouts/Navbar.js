import React from "react";
import logo from "../../assets/svg/logo.svg";
import NavbarStyles from "../../assets/css/Navbar.module.css";
function Navbar(props) {
  return (
    <nav className={NavbarStyles.navbar}>
      <div className={NavbarStyles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <ul className={NavbarStyles.navLinks}>
        <li>
          <a
            onClick={() => {
              props.setRoutes("/");
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              props.setRoutes("/about");
            }}
          >
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
