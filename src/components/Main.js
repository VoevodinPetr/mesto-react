import React from "react";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onCardLike,
  onCardDelete,
  cards,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-conteiner">
          <img
            className="profile__avatar"
            src={currentUser.avatar}
            alt="Аватар."
          />
          <button
            className="button button_type_avatar"
            type="button"
            aria-label="Обновить аватар"
            onClick={onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              className="button button_type_edit"
              type="button"
              aria-label="Редактировать"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__job">{currentUser.about}</p>
        </div>
        <button
          className="button button_type_add"
          type="button"
          aria-label="Добавить фото"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="cards">
        <ul className="cards__container">
          {cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
