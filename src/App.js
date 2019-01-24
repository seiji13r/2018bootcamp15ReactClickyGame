import React, { Component } from 'react';
import { characters, navMessages } from './data'
import NavResults from "./components/NavResults";
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import "./App.css";

class App extends Component {

  // State Notes
  // navMsg Codes:
  //  0: None
  //  1: Incorrect
  //  2: Correct
  //  3: Correct and Win
  state = {
    characters: characters,
    guessedIds: [],
    maxScore: 0,
    currScore: 0,
    navMsgCode: 0,
    navMsgs: navMessages,
  };
  

  componentDidMount() {
    // Shuffle Array of Characters
    this.setState({
      characters: this.state.characters.sort((a,b) => 0.5 - Math.random())
    })
  }

  cardClick = (id) => {
    console.log(id);
    // Shuffle Array of Characters
    this.setState({
      characters: this.state.characters.sort((a,b) => 0.5 - Math.random())
    })

    // Check if image has been clicked before
    if (!(id in this.state.guessedIds)) {
      // Set A local current Score
      const currentScore = this.state.currScore + 1;
      const maxScore = this.state.maxScore;
      // If the Image has not been clicked before:
      // Add the id to the guessed ids.
      // Set the Motivation Message if score < 12 otherwise set it to win message.
      // Increment the Current Score by one.
      this.setState({
        guessedIds: [...this.state.guessedIds, id],
        navMsgCode: currentScore < 12 ? 2 : 3,
        currScore: currentScore,
        maxScore: currentScore >= maxScore ? currentScore : maxScore
      });
    } else {
      this.setState({
        guessedIds: [],
        navMsgCode: 1,
        currScore: 0
      });
    }

  }

  render() {
    return (
      <div className="container">
        <div>Hello Clicky Game</div>
        <NavResults
          messages={this.state.navMsgs}
          msgCode={this.state.navMsgCode}
          currScore={this.state.currScore}
          maxScore={this.state.maxScore}
        />
        <Header />
        <GameBoard 
          characters={this.state.characters} 
          cardClick={this.cardClick}
        />
      </div>
    );
  }
}

export default App;
