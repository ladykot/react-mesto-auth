import React from "react";

function Login({ onClose, password, email, onSubmit, title, buttonText }) {
  return (
    <>
      <section className={`popup popup_type_create-card popup_opened`}>
        <div className={`popup__container`}>
        <form className="popup__form" onSubmit={onSubmit} noValidate>
          <h3 className="popup__title">{title}</h3>
          <fieldset className="popup__inputs">
            <input
              type="text"
              id="email-input"
              name="email"
              value={email || ""}
              placeholder="Email"
              className="popup__inputs-item popup__inputs-item_type_title"
              required
              minLength="2"
              maxLength="30"
            />
            <span className="title-input-error popup__inputs-error"></span>
            <input
              type="text"
              id="password-input"
              name="password"
              value={password || ""}
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
