import React from "react";
import './style.css';

function GameCard(props) {
  return (
    <div className="col-3">
      <div className="game-card-img-wrapper" onClick={props.cardClick}>
        <img src={props.image} alt={props.name}/>
      </div>
    </div>
  );
}

export default GameCard;