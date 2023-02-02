import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="App">
      <Header />

      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={
          <fieldset className="popup__input-container">
            <input
              className="popup__input"
              id="popup__input_user-avatar"
              type="url"
              name="avatar_user"
              placeholder="Ссылка на аватар"
              required
            />
            <span
              className="popup__input-error"
              id="popup__input_user-avatar-error"
            ></span>
          </fieldset>
        }
      />

      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <fieldset className="popup__input-container">
              <input
                className="popup__input popup__input_name"
                type="text"
                id="popup__input_name"
                name="name_user"
                minLength="2"
                maxLength="40"
                placeholder="Имя"
                required
              />
              <span
                className="popup__input-error"
                id="popup__input_name-error"
              ></span>
              <input
                className="popup__input popup__input_job"
                id="popup__input_job"
                type="text"
                name="job_user"
                minLength="2"
                maxLength="200"
                placeholder="О себе"
                required
              />
              <span
                className="popup__input-error"
                id="popup__input_job-error"
              ></span>
            </fieldset>
          </>
        }
      />

      <PopupWithForm
        name="add"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <fieldset className="popup__input-container">
              <input
                className="popup__input"
                id="popup__input_card-name"
                type="text"
                name="name"
                minLength="2"
                maxLength="30"
                placeholder="Название"
                required
              />
              <span
                className="popup__input-error"
                id="popup__input_card-name-error"
              ></span>
              <input
                className="popup__input"
                id="popup__input_link"
                type="url"
                name="link"
                placeholder="Ссылка на картинку"
                required
              />
              <span
                className="popup__input-error"
                id="popup__input_link-error"
              ></span>
            </fieldset>
          </>
        }
      />

      <PopupWithForm
        name="consent"
        title="Вы уверены?"
        buttonText="Да"
        isOpen={false}
        onClose={closeAllPopups}
      />
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
