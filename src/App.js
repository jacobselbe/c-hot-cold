import React from 'react';
import './app.css';
import GuessMessage from './GuessMessage';
import GuessForm from './GuessForm';
import GuessTracker from './GuessTracker';
import GuessedValues from './GuessedValues';
import NewGame from './NewGame';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secretNumber: Math.floor(Math.random() * 100) + 1,
      guessedValues: []
    }
  }
  
  restartGame() {
    this.setState({
      secretNumber: Math.floor(Math.random() * 100) + 1,
      guessedValues: []
    });
  }

  updateGuess(guess) {
    this.setState({
      guessedValues: [...this.state.guessedValues, guess]
    });
  }

  render() {
    const {secretNumber, guessedValues} = this.state;

    const temp = Math.abs(guessedValues[guessedValues.length - 1] - secretNumber);

    const message = guessedValues.length === 0 ?
      'Make Your Guess!' : temp === 0 ?
        'You Got It!' : temp <= 10 ?
          'Hot!' : temp <= 20 ?
            'Warm!' : 'Cold';

    return (
      <div>
        <h1>HOT or COLD</h1>
        <header>
          <NewGame restartGame={() => this.restartGame()} />
        </header>
        <main role='main'>
          <GuessMessage message={message} />
          <GuessForm onSubmit={guess => this.updateGuess(guess)} />
          <GuessTracker guesses={guessedValues.length} />
          <GuessedValues guessedValues={guessedValues} />
        </main>
      </div>
    );
  }
}

export default App;