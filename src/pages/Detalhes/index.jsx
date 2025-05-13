import { useParams, Link } from 'react-router-dom';

export default function Detalhes() {
  const { code } = useParams();

  const suitMap = {
    'S': 'SPADES',
    'H': 'HEARTS',
    'D': 'DIAMONDS',
    'C': 'CLUBS',
  };

  const valueMap = {
    'A': 'ACE',
    'K': 'KING',
    'Q': 'QUEEN',
    'J': 'JACK',
    '0': '10',
  };

  const valueCode = code.length === 3 ? '10' : code[0];
  const suitCode = code.length === 3 ? code[2] : code[1];

  const value = valueMap[valueCode] || valueCode;
  const suit = suitMap[suitCode] || suitCode;

  const imageUrl = `https://deckofcardsapi.com/static/img/${code}.png`;

  return (
    <div className="max-w-md mx-auto bg-white rounded shadow p-4">
      <img src={imageUrl} alt={`${value} of ${suit}`} className="w-full mb-4" />
      <h2 className="text-2xl font-bold mb-2">{value} of {suit}</h2>
      <p className="mb-4">Código: {code}</p>
      <Link to="/" className="text-blue-500 hover:underline">Voltar</Link>
    </div>
  );
}
