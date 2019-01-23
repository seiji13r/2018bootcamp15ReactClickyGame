import React from "react";

function GameCard(props) {
  return (
    <div onClick={props.cardClick}>
      GameCard - {props.name} - {props.image}
    </div>
  );
}

export default GameCard;