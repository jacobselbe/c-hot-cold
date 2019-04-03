import React from 'react';

function GuessMessage(props) {
    const message = !props.gameStarted ?
        'Make your guess!' : props.temp === 0 ?
            'You got it!' : props.temp <= 10 ?
                'Hot!' : props.temp <= 20 ?
                    'Warm!' : 'Cold';
        
    return (
        <h2>{message}</h2>
    );
};

export default GuessMessage;