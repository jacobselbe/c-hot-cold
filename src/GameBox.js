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
            guess: 0
        }
    }

    //some callback functions for the components below...

    render() {
        return (
            <div>
                <GuessMessage />
                <div className='form-box'>
                    <GuessForm />
                    <GuessTracker />
                </div>
                <GuessedValues />
            </div>
        );
    }
}

export default GameBox;