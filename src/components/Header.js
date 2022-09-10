import React from "react";
import logo from "../images/logo.svg";

function Header({ email, loggedId }) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="логотип Место" />
      {loggedId && (
        <>
          <p className="header__mail">{email}</p>
          <p className="header__state"></p>
        </>
      )}
    </header>
  );
}

export default Header;
