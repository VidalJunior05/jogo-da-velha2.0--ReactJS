import React,{ useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import t from 'prop-types';

export default function Square({ value, index }){

    const { state: {
        squares, 
        isXNext, 
        whoIsWinner},
        dispatch,
    } = useContext(GameContext);

    function handleClick(){
        if(squares[index]) return;
        if(whoIsWinner) return;

        const newSquares = [...squares];
        newSquares[index] = isXNext ? 'X' : 'O';

        dispatch({type: 'UPDATE_SQUARES', payload: newSquares });

    }

    return(
        <div>
            <button type="button" onClick={handleClick}>{value}</button>
        </div>
    );
};

Square.defaultProps ={
    value: null,
};
Square.propTypes = {
    value: t.string,
    index: t.number.isRequired,
};