import React from "react";
import GameCard from "../GameCard"

function GameBoard(props) {
  return (
    <div className="container">
      <div>GameBoard</div>
      {props.characters.map(character => (
        <GameCard 
          key={character.id} 
          id={character.id} 
          name={character.name} 
          cardClick={()=>props.cardClick(character.id)}
        />
      ))}
    </div>
  );
}

export default GameBoard;