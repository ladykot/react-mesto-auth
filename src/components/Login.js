import React from "react";

function Login({ title, buttonText }) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');


    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password)
    }

    React.useEffect(() => {
        setEmail("");
        setPassword("");
    }, []);

  return (
    <>
      <section className={`popup popup_type_create-card popup_opened`}>
        <div className={`popup__container`}>
        <form className="popup__form" onSubmit={handleSubmit} noValidate>
          <h3 className="popup__title">{title}</h3>
          <fieldset className="popup__inputs">
            <input
              type="text"
              id="email-input"
              name="email"
              value={email || ""}
              onChange={handleChangeEmail}
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
              onChange={handleChangePassword}
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
