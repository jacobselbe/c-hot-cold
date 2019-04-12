import React from 'react';

function GuessForm(props) {
    return (
        <div>
            <form onSubmit={(e) => props.onSubmit(e)}>
                <input id='guessInput'></input>
                <button>Guess</button>
            </form>
        </div>
    );
}

export default GuessForm;