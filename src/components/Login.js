import React from "react";

function Login({ title, buttonText, onLoginUser }) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLoginSubmit = (e) => { // отправить данные на проверку
        e.preventDefault();
        onLoginUser({
          email,
          password
        })
    }

    // reset email & password
    React.useEffect(() => {
        setEmail("");
        setPassword("");
    }, []);

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
