import React from 'react';

function NewGame(props) {
    return (
        <div>
            <button onClick={() => props.restartGame()}>New Game</button>
        </div>
    );
}

export default NewGame;