import React from "react";

function InfoTooltip ({ name, isOpen, onClose, title }) {
    return (
        <section
        className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}
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
            <h3 className="popup__title">{title}</h3>
          </form>
        </div>
      </section>
    )
}

export default InfoTooltip;