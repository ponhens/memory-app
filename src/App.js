import { useState } from 'react';
import './App.css';
import './components/SingleCard';
import SingleCard from './components/SingleCard';

function App() {
const [cards, setCards] = useState([])
const [turns, setTurns] = useState(0)
const [choiceOne, SetChoiceOne] = useState(null)
const [choiceTwo, SetChoiceTwo] = useState(null)

const cardImages = [
  { "src" : "/img/cat.png" },
  { "src" : "/img/deer.png" },
  { "src" : "/img/frog.png" },
  { "src" : "/img/kiwi.png" },
  { "src" : "/img/monstera.png" },
  { "src" : "/img/rubber.png" },
  { "src" : "/img/seagull.png" },
  { "src" : "/img/squirrel.png" },
]

const shuffleCards = () => {
  const shuffledCards = [...cardImages, ...cardImages].sort(() => Math.random() - 0.5).map((card) => ({ ...card, id: Math.random()}));
  setCards(shuffledCards);
  setTurns(0);
}

const handleChoice = (card) => {
  choiceOne ? SetChoiceTwo(card) : SetChoiceOne(card);
}

console.log(cards, turns);

  return (
    <div className="App">
      <h1>Memory</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className='card-grid'>
        {cards.map(card => (
          <SingleCard key={card.id} card={card} handleChoice={handleChoice}/>
        ))}
      </div>

    </div>
  );
}

export default App;
