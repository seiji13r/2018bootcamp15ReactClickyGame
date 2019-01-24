import React from "react";
import GameCard from "../GameCard";
import './style.css';

function GameBoard(props) {
  return (
    <div className="container">

      <div className="row">
        <div>GameBoard</div>
      </div>

      <div className="row">
        {props.characters.map(character => (
          <GameCard 
            key={character.id} 
            id={character.id} 
            name={character.name}
            image={character.image}
            cardClick={()=>props.cardClick(character.id)}
            maxScore={props.maxScore}
            currScore={props.currScore}
          />
        ))}

      </div>
    </div>
  );
}

export default GameBoard;