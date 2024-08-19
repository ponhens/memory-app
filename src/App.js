import { useEffect, useState } from "react";
import "./App.css";
import "./components/SingleCard";
import SingleCard from "./components/SingleCard";

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [cardsClickable, setCardsClickable] = useState(true);
  const [memoryIsDone, setMemoryIsDone] = useState(false);
  const [nrOfCardsWithMatchEqualTrue, SetNrOfCardsWithMatchEqualTrue] =
    useState(0);

  useEffect(() => {
    setTurns(turns);
    console.log("turns", turns);
    if (choiceOne && choiceTwo && choiceTwo.id != choiceOne.id) {
      if (choiceTwo.src == choiceOne.src && choiceTwo.id != choiceOne.id) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        makeCardsUnclickableforAsec();
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceTwo]);

  useEffect(() => {
    checkToSeeIfMemoryIsDone();
  }, [cards]);

  const makeCardsUnclickableforAsec = () => {
    setCardsClickable(false);
    setTimeout(() => setCardsClickable(true), 1200);
  };

  const checkToSeeIfMemoryIsDone = () => {
    let counter = 0;
    cards.map((c) => {
      if (c.matched == true) {
        counter = counter + 1;
      }
    });
    console.log(cards);
    console.log(counter, " counter");
    console.log("memoryIsDone == ", memoryIsDone);
    if (counter == cards.length) {
      console.log("memory done");
      setMemoryIsDone(true);
      console.log("memoryIsDone = ", memoryIsDone);
    }
  };

  const resetTurn = () => {
    console.log("resetTurn");
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  const cardImages = [
    {
      src: "/img/cat.png",
      matched: false,
    },
    {
      src: "/img/deer.png",
      matched: false,
    },
    {
      src: "/img/frog.png",
      matched: false,
    },
    {
      src: "/img/kiwi.png",
      matched: false,
    },
    {
      src: "/img/monstera.png",
      matched: false,
    },
    {
      src: "/img/rubber.png",
      matched: false,
    },
    {
      src: "/img/seagull.png",
      matched: false,
    },
    {
      src: "/img/squirrel.png",
      matched: false,
    },
  ];

  const shuffleAndPlaceCards = () => {
    const shuffledCards = [...cardImages, ...cardImages].sort(
      () => Math.random() - 0.5
    );
    const shuffledCardsWithIds = shuffledCards.map((card) => ({
      ...card,
      id: Math.random(),
    }));
    setCards(shuffledCardsWithIds);
    setTurns(0);
    setChoiceOne(null);
    setChoiceTwo(null);
    setMemoryIsDone(false);
  };

  const setPickedCardToChoiceOneOrTwo = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  return (
    <div className="App">
      <h1>Memory</h1>
      <button onClick={shuffleAndPlaceCards}>New Game</button>
      <h2>Turns: {turns}</h2>
      <p
        className={
          memoryIsDone
            ? "congratulationsTextActive"
            : "congratulationsTextInactive"
        }
      >
        Congratulations
      </p>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            setPickedCardToChoiceOneOrTwo={setPickedCardToChoiceOneOrTwo}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            cardsClickable={cardsClickable}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
