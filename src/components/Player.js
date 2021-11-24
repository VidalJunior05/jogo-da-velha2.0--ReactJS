import React,{ useContext } from 'react';
import { GameContext } from '../contexts/GameContext';


export default function Player(){

    const {state: {isXNext}, } = useContext(GameContext);

    return(
        <div>
            <h1 className="titleMain">JOGO DA VELHA</h1>
            <h1>É a vez do Player: {isXNext ? 'X' : 'O' }</h1>
        </div>
    );
};