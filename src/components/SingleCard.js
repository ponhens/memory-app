import './SingleCard.css'


function SingleCard({card, handleChoice}) {


const handleClick = () => {
   handleChoice(card)
}

  return (
          <div className='card'>
            <div>
              <img className='front' src={card.src} alt="card front"></img>
              <img className='back' src="/img/cover.png" alt="card back" onClick={handleClick}></img>
            </div>
          </div>
  );
}

export default SingleCard;