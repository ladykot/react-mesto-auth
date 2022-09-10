import React, { useState } from "react";

function InfoTooltip({ name, isOpen, onClose }) {
  const [successTitle, setSuccessTitle] = useState("");
  const [successImage, setSuccessImage] = useState("");

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
          <h3 className="popup__title">Заголовок</h3>
        </form>
      </div>
    </section>
  );
}

export default InfoTooltip;
