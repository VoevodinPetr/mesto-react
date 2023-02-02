function PopupWithForm({name, title, buttonText, isOpen, onClose, children}) {
  return (
    <div
      className={
        `popup popup_type_${name}` + (isOpen && " popup_is-opened")
      }
    >
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form
          className="popup__form popup__form-edit"
          name="{name}"
          noValidate
        >
          {children}
          <button className="button button_type_save" type="submit">
            {buttonText}
          </button>
        </form>
        <button
          className="button button_type_close"
          type="button"
          aria-label="Закрыть форму"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
