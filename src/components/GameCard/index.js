import React from "react";
import './style.css';

function GameCard(props) {
  return (
    <div className="col-3 col-md-3 col-lg-3">
      <div 
        className={props.maxScore===0 || props.currScore>0 ? "game-card-img-wrapper" : "game-card-img-wrapper shake"} 
        onClick={props.cardClick}
      >
        <img src={props.image} alt={props.name}/>
      </div>
    </div>
  );
}

export default GameCard;