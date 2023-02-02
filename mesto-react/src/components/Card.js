function Card({card, onCardClick}) {
  function handleCardClick() {
    onCardClick(card);
  }

  return (
      <li className="cards__foto">
        <img
          className="cards__image"
          src={card.link}
          alt={card.name}
          onClick={handleCardClick}
        />
        <button
          className="button button_type_delete"
          type="button"
          aria-label="Удалить"
        ></button>
        <div className="cards__block">
          <h2 className="cards__title">{card.name}</h2>
          <div className="cards__like-container">
            <button
              className="button button_type_like"
              type="button"
              aria-label="Лайк"
            ></button>
            <span className="cards__like-number"></span>
          </div>
        </div>
      </li>
  );
}

export default Card;
