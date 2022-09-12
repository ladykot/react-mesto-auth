import React from "react";
import { BrowserRouter, Link, NavLink, Route, Switch } from "react-router-dom";
import logo from "../images/logo.svg";

function Header({ userData, onSignOut, loggedIn }) {
  const handlerSubmit = () => {
    onSignOut();
  };

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="логотип Место" />
      {/* <BrowserRouter> */}
        <Switch>
          <Route path="/signup">
            <a href="/signin" className="header__mail">
              Войти
            </a>
          </Route>
          <Route path="/signin">
            <a href="/signup" className="header__mail">
              Регистрация
            </a>
          </Route>
          <Route path="/">
            {loggedIn && <p className="header__mail">{userData}</p>}
            <NavLink
              to="/signin"
              className="header__mail header__mail_active"
              onClick={handlerSubmit}
            >
              Выйти
            </NavLink>
          </Route>
        </Switch>
      {/* </BrowserRouter> */}
    </header>
  );
}

export default Header;
