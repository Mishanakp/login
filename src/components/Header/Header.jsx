import React from "react";
import "./Header.css";
import {GiHamburgerMenu} from "react-icons/gi"
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const Links = [
    {
      name: "All",
      path: "/home",
    },
    {
      name: "Asia",
      path: "/asia",
    },
    {
      name: "Europe",
      path: "/europe",
    },
  ];

  const loc = useLocation();

  return (
    <div className="header">
      <div
        style={{
          width: "48%",
          height: "5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "1rem",
        }}
      >
        <p className="m-0 p-0 fw-bold">Countries</p>
      </div>
      <div
        style={{
          width: "48%",
          height: "5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          padding: "1rem",
          listStyle: "none",
          textDecoration: "none",
          gap: "1rem",
          color: "gray",
        }}
      >
        <GiHamburgerMenu style={{cursor:"pointer"}} className="hamburger-icon"/>
        {Links.map((items, idx) => {
          return (
            <li
            style={{cursor:"pointer"}}
              className={`${
                loc.pathname === items.path ? "linkActive" : ""
              } fw-bold nav-item`}
              key={idx}
              onClick={() => navigate(items.path)}
            >
              {items.name}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
