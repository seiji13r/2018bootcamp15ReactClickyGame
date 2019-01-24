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
    // Shuffle Array of Characters using sort.
    this.setState({
      characters: this.state.characters.sort((a,b) => 0.5 - Math.random())
    })
  }

  cardClick = (id) => {

    // Set A local current Score It will loop every 12 Steps
    const currentScore = this.state.currScore < 12 ?
      this.state.currScore + 1 : 1;

    // Check if image has been clicked before
    if (!(this.state.guessedIds.includes(id))) {
      
      const maxScore = this.state.maxScore;
      // If the Image has not been clicked before:
      // Add the id to the guessed ids.
      // Set the Motivation Message if score < 12 otherwise set it to win message.
      // Increment the Current Score by one.
      this.setState({
        guessedIds: currentScore < 12 ? [...this.state.guessedIds, id] : [],
        navMsgCode: currentScore < 12 ? 2 : 3,
        currScore: currentScore,
        maxScore: currentScore >= maxScore ? currentScore : maxScore
      });
    } else {
      // If the Image has been clicked before:
      // Set all values to initial
      this.setState({
        guessedIds: [],
        navMsgCode: 1,
        currScore: 0
      });
    }

    // Shuffle Array of Characters
    this.setState({
      characters: this.state.characters.sort((a,b) => 0.5 - Math.random())
    })
  }

  render() {
    return (
      <div className="container">
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
          currScore={this.state.currScore}
          maxScore={this.state.maxScore}
        />
      </div>
    );
  }
}

export default App;
