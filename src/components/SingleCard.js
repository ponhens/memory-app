import './SingleCard.css'


function SingleCard({card, setPickedCardToChoiceOneOrTwo, flipped, cardsClickable}) {
/////////////////////////////////////////////////////


const handleClick = () => {
  if (cardsClickable){
    setPickedCardToChoiceOneOrTwo(card)
  }
}

  return (
          <div className='card'>
            <div className={flipped ? "flipped" : ""}>
              <img className='front' src={card.src} alt="card front"></img>
              <img className='back' src="/img/cover.png" alt="card back" onClick={handleClick}></img>
            </div>
          </div>
  );









/////////////////////////////////////////////////////
}

export default SingleCard;