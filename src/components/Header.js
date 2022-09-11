import React from "react";
import { Link, Route, Switch, useHistory, useLocation } from "react-router-dom";
import logo from "../images/logo.svg";

function Header({ userData, onSignOut }) {

  const history = useHistory();
  const handlerSubmit = () => {
    onSignOut();
    history.push('signin')
  };

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="логотип Место" />
      <Switch>
        <Route path="/signup">
          <Link to="/signin" className="header__mail">Войти</Link>
        </Route>
        <Route path="/signin">
          <Link to="/signup" className="header__mail">Регистрация</Link>
        </Route>
        <Route path="/">
          <button className="header__mail" onClick={handlerSubmit}>Выйти
          </button>
        </Route>
      </Switch>

        {/* <>
          <p className="header__mail">{userData.email}</p>
          <Link to={headertButton.link} onClick={handlerSubmit}>
            <p>{headertButton.text}</p>
          </Link>
        </> */}

    </header>
  );
}

export default Header;
