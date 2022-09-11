import React, { useState } from "react";
import InfoTooltip  from "./InfoTooltip";
import { Link, useHistory } from "react-router-dom";

function Register({ title, buttonText, onRegister, isOpenInfo }) {
  
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = useHistory();

  // обработка сабмита регистрации
  const handeleRegisterSubmit = (e) => {
    e.preventDefault();
    // отправка данных на сервер
    onRegister({ email, password })
      .then((data) => {
        console.log("data", data);

        if (!data || data.statusCode === 400) {
              throw new Error("Что-то пошло не так");
            } 
        // debugger
        // setInfoTooltipOpen(true); // открыть окно успеха/неуспеха
        isOpenInfo(true)
        console.log("Успех")
        history.push("/signin");
      })
      .catch((err) => {
        // setInfoTooltipOpen(false); // открыть окно успеха/неуспеха
        console.log(err);
      });
  };


  // reset email & password
  React.useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);

  return (
    <>
      <section className={`popup-auth`}>
        <div className={`popup__container`}>
          <form
            className="popup-auth__form"
            onSubmit={handeleRegisterSubmit}
            noValidate
          >
            <h3 className="popup-auth__title">{title}</h3>
            <fieldset className="popup__inputs">
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
      {/* <InfoTooltip
        name="success"
        isOpen={isInfoTooltipOpen} // открыто когда нажата кнопка Зарегистрироваться
        onClose={closeInfoTooltip}
      /> */}
    </>
  );
}
export default Register;
