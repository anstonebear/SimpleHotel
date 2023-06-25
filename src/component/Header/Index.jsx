import React from "react";

import "../Header/Index.scss";

const Header = () => {
  return (
    <header className="header_box">
      <a href="#logo" className="header_box-logotype">
        Simple Hotel Check
      </a>
      <button className="header_box-logout">
        Выйти
        <img
          src={"https://img.icons8.com/fluency-systems-filled/48/exit.png"}
          alt="exit"
        />
      </button>
    </header>
  );
};

export default Header;
