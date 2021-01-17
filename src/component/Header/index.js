import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Asset/Logo.jpg";
// import Logo from "../Asset/Logo.jpg";
import "./styless.scss";

const Header = (props) => {
  return (
    <div>
      <header className="header">
        <div className="wrap">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="ini harusnya logo" />
            </Link>
          </div>
          <div className="callAction">
            <ul>
              <li>
                <Link to="/resiter">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
