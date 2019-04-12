import React from 'react';

function GuessTracker(props) {
    return (
        <div>
            <h3>Guesses: {props.guesses}</h3>
        </div>
    );
}

export default GuessTracker;