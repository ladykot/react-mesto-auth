import React from "react";
import InfoTooltip from "./InfoTooltip";
import { Link, useHistory } from 'react-router-dom';
import * as auth from "./Auth"

function Register({ title, buttonText, isOpen, onClose }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = useHistory();


  React.useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);


  // обработка сабмита регистрации
  const handeleRegisterSubmit = (e) => {
    e.preventDefault();
    // отправка данных на сервер
    auth.register(
      email,
      password
    )
    history.push('/signin')
    // открыть окно Успеха
  }


  return (
    <>
      <section className={`popup popup_type_signup popup_opened`}>
        <div className={`popup__container`}>
          <form className="popup__form" onSubmit={handeleRegisterSubmit} noValidate>
            <h3 className="popup__title">{title}</h3>
            <fieldset className="popup__inputs">
              <input
                type="text"
                id="email-input"
                name="email"
                value={email || ""}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="popup__inputs-item popup__inputs-item_type_title"
                required
                minLength="2"
                maxLength="35"
              />
              <span className={`title-input-error popup__inputs-error`}></span>
              <input
                type="password"
                id="password-input"
                name="password"
                value={password || ""}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль"
                className="popup__inputs-item popup__inputs-item_type_link"
                required
              />
            </fieldset>
            <button
              type="submit"
              className="popup__button-save"
              aria-label="Войти"
            >
              {buttonText}
            </button>
            <div className="popup__signin">
              <p>Уже зарегистрированы?</p>
              <Link to="signin" className="popup__login-link">Войти</Link>
            </div>
          </form>
        </div>
      </section>
      <InfoTooltip
        name="success"
        isOpen={handeleRegisterSubmit && isOpen} // открыто когда нажата кнопка Зарегистрироваться
        onClose={onClose}
      />
    </>
  );
}
export default Register;
