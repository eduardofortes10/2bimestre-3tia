import { useEffect, useState } from 'react';
import { useFavorite } from '../../context/favoriteContext';
import { Link } from 'react-router-dom';

export default function Home() {
  const [cards, setCards] = useState([]);
  const { addFavorite, removeFavorite, isFavorite, favorites } = useFavorite();

  useEffect(() => {
    async function fetchCards() {
      const res = await fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=12');
      const data = await res.json();
      setCards(data.cards);
    }
    fetchCards();
  }, []);

  const toggleFavorite = (card) => {
    const cardData = {
      code: card.code,
      image: card.image,
      value: card.value,
      suit: card.suit
    };
    isFavorite(card.code)
      ? removeFavorite(card.code)
      : addFavorite(cardData);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-white mb-4">Cartas</h1>
      <div className="grid grid-cols-4 gap-4 mb-8">
        {cards.map((card) => (
          <div key={card.code} className="bg-white rounded p-2 shadow">
            <Link to={`/card/${card.code}`}>
              <img src={card.image} alt={card.code} className="w-full mb-2" />
            </Link>
            <p className="font-semibold text-center mb-2">
              {card.value} of {card.suit}
            </p>
            <button
              onClick={() => toggleFavorite(card)}
              className={`w-full px-2 py-1 rounded text-white ${
                isFavorite(card.code) ? 'bg-red-500' : 'bg-blue-500'
              }`}
            >
              {isFavorite(card.code) ? 'Remover' : 'Favoritar'}
            </button>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-white mb-4">Favoritos</h2>
      {favorites.length === 0 ? (
        <p className="text-white">Nenhuma carta favoritada ainda.</p>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {favorites.map((card) => (
            <div key={card.code} className="bg-yellow-100 rounded p-2 shadow">
              <img src={card.image} alt={card.code} className="w-full mb-2" />
              <p className="text-center font-semibold">
                {card.value} of {card.suit}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
