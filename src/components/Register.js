import React, { useState } from "react";
import InfoTooltip from "./InfoTooltip";
import { Link, useHistory } from "react-router-dom";

function Register({ title, buttonText, onRegister }) {
  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = useHistory();

  // обработка сабмита регистрации
  const handeleRegisterSubmit = (e) => {
    e.preventDefault();
    // отправка данных на сервер
    onRegister({ email, password })
      .then(() => {
        setInfoTooltipOpen(true); // открыть окно успеха/неуспеха
        history.push("/signin");
        // props.handleLogin(user.email) // добавляем email в header
      })
      .catch((err) => {
        setInfoTooltipOpen(true); // открыть окно успеха/неуспеха

        console.log(err);
        // setAuth(false) // окно неуспеха
      });
  };

  const closeInfoTooltip = () => {
    setInfoTooltipOpen(false);
  };

  // reset email & password
  React.useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);

  return (
    <>
      <section className={`popup-auth popup_opened`}>
        <div className={`popup__container`}>
          <form
            className="popup-auth__form"
            onSubmit={handeleRegisterSubmit}
            noValidate
          >
            <h3 className="popup-auth__title">{title}</h3>
            <fieldset className="popup-auth__inputs">
              <input
                type="text"
                id="email-input"
                name="email"
                value={email || ""}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="popup-auth__inputs-item"
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
                x
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль"
                className="popup-auth__inputs-item"
                required
              />
            </fieldset>
            <button
              type="submit"
              className="popup-auth__button-save"
              aria-label="Войти"
            >
              {buttonText}
            </button>
            <div className="popup-auth__signin">
              <p className="popup-auth__signin-text">Уже зарегистрированы?</p>
              <Link to="signin" className="popup-auth__signin-link">
                Войти
              </Link>
            </div>
          </form>
        </div>
      </section>
      <InfoTooltip
        name="success"
        isOpen={isInfoTooltipOpen} // открыто когда нажата кнопка Зарегистрироваться
        onClose={closeInfoTooltip}
      />
    </>
  );
}
export default Register;
