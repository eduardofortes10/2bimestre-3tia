import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
  const [cards, setCards] = useState([]);
  const [deckId, setDeckId] = useState('');

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=12');
        setCards(response.data.cards);
        setDeckId(response.data.deck_id);
      } catch (error) {
        console.error('Erro ao buscar as cartas:', error);
      }
    };

    fetchCards();
  }, []);

  return (
    <div className="min-h-screen bg-green-900 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <Link
            key={card.code}
            to={`/card/${card.code}`}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105 overflow-hidden"
          >
            <img
              src={card.image}
              alt={`${card.value} of ${card.suit}`}
              className="w-full object-cover"
            />
            <div className="p-4 text-center">
              <p className="text-lg font-semibold text-gray-800">{card.value} of {card.suit}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
  
}
