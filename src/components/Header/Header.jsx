// src/components/Header.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import s from "./Header.module.css";

const Header = () => {
  const location = useLocation();

  return (
    <header className={s.header}>
      <div className="container">
        <nav className={s.nav}>
          <svg width="136" height="16" className={s.logo}>
            <use xlinkHref="/src/assets/logo/Logo.svg#TravelTrucks" />
          </svg>
          <ul className={s.ul}>
            <li>
              <Link
                to="/"
                className={location.pathname === "/" ? s.activeLink : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/catalog"
                className={location.pathname === "/catalog" ? s.activeLink : ""}
              >
                Catalog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
