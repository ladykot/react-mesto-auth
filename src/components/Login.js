import React from "react";
import { useHistory } from "react-router-dom";

function Login({ title, buttonText, onLogin }) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const history = useHistory();

    const handleLoginSubmit = (e) => { // отправить данные на проверку
        e.preventDefault();
        onLogin({email, password})
        
        .then(resetForm)
        .then(() => {
          history.push('/')
        })
        .catch((err) => console.log(err));
    }

    // reset email & password
    const resetForm = () => {
        setEmail("");
        setPassword("");
    };

  return (
    <>
      <section className={`popup popup_type_signin popup_opened`}>
        <div className={`popup__container`}>
        <form className="popup__form" onSubmit={handleLoginSubmit} noValidate>
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
        </form>
        </div>
        
      </section>
    </>
  );
}

export default Login;
