import React from "react";
import logo from "../../assets/svg/logo.svg";
import NavbarStyles from "../../assets/css/Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <nav className={NavbarStyles.navbar}>
      <div className={NavbarStyles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <ul className={NavbarStyles.navLinks}>
        <li>
          <button onClick={handleClick}>Home</button>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
