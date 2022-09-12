import React from "react";
import { useHistory } from "react-router-dom";

function Login({ title, buttonText, onLogin }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = useHistory();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password })
      .then((res) => {
        history.push("/");
        resetForm();
      })
      .catch((err) => console.log(err));
  };

  // reset email & password
  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <section className={`popup-auth popup_opened`}>
        <div className={`popup__container`}>
          <form
            className="popup-auth__form"
            onSubmit={handleLoginSubmit}
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
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
