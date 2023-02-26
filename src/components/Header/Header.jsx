import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./styles.css";

const routes = [
  // { path: "/home", name: "Home" },
  // { path: "/about", name: "About" },
  // { path: "/contact", name: "Contact" },
  // { path: "/users", name: "Users" },
  // { path: "/user:id", name: "Users:id" },
  { path: "/counter", name: "Counter" },
];

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header>
      <ul>
        {routes.map((route, index) => (
          <li key={index}>
            <Link
              to={route.path}
              className={pathname === route.path ? "active" : ""}
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
