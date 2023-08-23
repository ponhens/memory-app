import { useEffect, useState } from 'react';
import './App.css';
import './components/SingleCard';
import SingleCard from './components/SingleCard';

function App() {
const [cards, setCards] = useState([])
const [turns, setTurns] = useState(0)
const [choiceOne, setChoiceOne] = useState(null)
const [choiceTwo, setChoiceTwo] = useState(null)

useEffect(()=>{
  console.log('cards', cards)
  console.log('choiceOne', choiceOne)
  console.log('choiceTwo', choiceTwo)
  if(choiceOne && choiceTwo){
  if (choiceTwo.src == choiceOne.src){
    setCards(prevCards => {
      return prevCards.map(card => {
        if (card.src === choiceOne.src){
          return {...card, matched: true}
        }
        else{
          return card
        }
      })
    })
    resetTurn()
  }
  else{
    setTimeout(() => resetTurn(), 1000)
  }
}

}, [choiceTwo, choiceOne])

const resetTurn = () => {
  setChoiceOne(null)
  setChoiceTwo(null)
  setTurns(prevTurns => prevTurns+1)
}


const cardImages = [
  { "src" : "/img/cat.png", matched: false},
  { "src" : "/img/deer.png", matched: false},
  { "src" : "/img/frog.png", matched: false},
  { "src" : "/img/kiwi.png", matched: false},
  { "src" : "/img/monstera.png", matched: false},
  { "src" : "/img/rubber.png", matched: false},
  { "src" : "/img/seagull.png", matched: false},
  { "src" : "/img/squirrel.png", matched: false},
]

const shuffleCards = () => {
  const shuffledCards = [...cardImages, ...cardImages].sort(() => Math.random() - 0.5).map((card) => ({ ...card, id: Math.random()}));
  setCards(shuffledCards);
  setTurns(0);
  setChoiceOne(null)
  setChoiceTwo(null)
}

const handleChoice = (card) => {
  choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
}

// console.log(cards, turns, choiceOne);

  return (
    <div className="App">
      <h1>Memory</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className='card-grid'>
        {cards.map(card => (
          <SingleCard 
            key={card.id} 
            card={card} 
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
          />
        ))}
      </div>

    </div>
  );
}

export default App;
