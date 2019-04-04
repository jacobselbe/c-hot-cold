import React from 'react';

function GuessMessage(props) {
    const message = !props.gameStarted ?
        'Make Your Guess!' : props.temp === 0 ?
            'You Got It!' : props.temp <= 10 ?
                'Hot!' : props.temp <= 20 ?
                    'Warm!' : 'Cold';
        
    return (
        <h2>{message}</h2>
    );
};

export default GuessMessage;