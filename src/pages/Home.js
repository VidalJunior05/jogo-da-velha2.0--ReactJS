import React from 'react';
import GameContextProvider from '../contexts/GameContext';
import Board from '../components/Board';
import './Home.css';

export default function Home() {
    return(
        <div>
            <GameContextProvider>
                <Board />
            </GameContextProvider>
        </div>
    );
};