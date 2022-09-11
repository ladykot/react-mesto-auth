import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import logo from "../images/logo.svg";

function Header({ userData, onSignOut }) {

  const location = useLocation();
  const history = useHistory();

  const headertButton = {
    text: location.pathname === "/signup" ? "Войти" : "Регистрация",
    link: location.pathname === "/signup" ? "/signin" : "/signup"
  }

  const handlerSubmit = () => {
    onSignOut();
    history.push("/signin");
  };

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="логотип Место" />

        <>
          <p className="header__mail">{userData.email}</p>
          <Link to={headertButton.link} onClick={handlerSubmit}>
            <p>{headertButton.text}</p>
          </Link>
        </>

    </header>
  );
}

export default Header;
