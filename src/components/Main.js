import React from "react";
import api from "../utils/api";
import Card from "./Card";

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
  const [userAvatar, setUserAvatar] = React.useState("");
  const [userName, setUserName] = React.useState(". . .");
  const [userDescription, setUserDescription] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserAvatar(res.avatar);
        setUserName(res.name);
        setUserDescription(res.about);
      })
      .catch((err) => console.error(err));

    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-conteiner">
          <img className="profile__avatar" src={userAvatar} alt="Аватар." />
          <button
            className="button button_type_avatar"
            type="button"
            aria-label="Обновить аватар"
            onClick={onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="button button_type_edit"
              type="button"
              aria-label="Редактировать"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__job">{userDescription}</p>
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
         onCardClick = {onCardClick}
          />
        ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
