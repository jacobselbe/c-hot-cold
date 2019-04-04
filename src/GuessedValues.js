import React from 'react';

function GuessedValues(props) {
    const values = props.guessedValues
        .map((value, index) => <li key={index}>{value}</li>);
        
    return (
        <div>
            <ul>
                {values}
            </ul>
        </div >
    );
}

export default GuessedValues;