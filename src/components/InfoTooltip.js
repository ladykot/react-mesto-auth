import React from "react";
import union from "../images/Union.svg"
import unionErr from "../images/Union_err.svg"

function InfoTooltip({ name, isOpen, onClose, isSucess }) {
  return (
    <section
      // className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}
        className={`popup popup_type_${name} popup_opened`}

      // закрытие по оверлею
      onClick={onClose}
    >
      <div
        className={`popup__container popup__container_${name}`}
        onClick={(e) => {
          e.stopPropagation(); // Прекращает дальнейшую передачу текущего события.
        }}
      >
        <button
          onClick={onClose}
          type="button"
          className="popup__button-close popup__button-close_type_edit hover"
        ></button>
        <form className="popup__form">
          { isSucess ?
            <>
              <img className="info" src={union} alt="Успех!"/>
              <h3 className="popup__title">Вы успешно зарегистрировались!</h3>
            </> :
            <>
            <img className="info" src={unionErr} alt="Ошибка"/>
            <h3 className="popup__title">Что-то пошло не так! Попробуйте ещё раз.</h3>
          </>
          }
        </form>
      </div>
    </section>
  );
}

export default InfoTooltip;
