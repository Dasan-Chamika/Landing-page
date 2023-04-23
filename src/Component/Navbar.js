import React, { useState } from "react";
import "./navbar.css";
import { FiX, FiMenu } from "react-icons/fi";

function Navbar({ navbarLinks }) {
  const [menuClick, setMenuClick] = useState(false);

  const toggleMenuClick = () => {
    setMenuClick(!menuClick);
  };

  return (
    <nav className="navbar">
      <span className="navbar_logo">SL Travel</span>
      {menuClick ? (
        <FiX className="navbar_menu" onClick={toggleMenuClick} />
      ) : (
        <FiMenu className="navbar_menu" onClick={toggleMenuClick} />
      )}
      <ul
        className={
          menuClick ? "navbar_list navbar_list--active" : "navbar_list"
        }
      >
        {navbarLinks.map((item) => {
          return (
            <li className="navbar_items" key={item.title}>
              <a className="navbar_links" href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
