import React from 'react';
import GuessMessage from './GuessMessage';
import GuessForm from './GuessForm';
import GuessTracker from './GuessTracker';
import GuessedValues from './GuessedValues';
import './game-box.css';

class GameBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameStarted: false,
            secretNumber: 0,
            guessedValues: []
        }
    }

    //some callback functions for the components below...
    updateGuess(e) {
        e.preventDefault();
        const guess = document.getElementById('guessInput').value;
        this.setState({
            guessedValues: [...this.state.guessedValues, guess],
            gameStarted: true
        });
    }

    render() {
        return (
            <div>
                <GuessMessage gameStarted={this.state.gameStarted} 
                    temp={Math.abs(this.state.guessedValues[this.state.guessedValues.length - 1] - this.state.secretNumber)} />
                <div className='form-box'>
                    <GuessForm onSubmit={e => this.updateGuess(e)} />
                    <GuessTracker guesses={this.state.guessedValues.length}/>
                </div>
                <GuessedValues guessedValues={this.state.guessedValues} />
            </div>
        );
    }
}

export default GameBox;