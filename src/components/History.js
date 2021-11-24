import React,{ useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

export default function History(){

    const {
        state:{history}, dispatch, 
    } = useContext(GameContext);

    function handleClickHistory(index){
        dispatch({type: 'UPDATE_HISTORY', payload: [history, index]});
    }

    return(
        <div>
            {history.map((data, index) => (
                <div key={index} className="history">
                    <button type="button" onClick={()=>handleClickHistory(index)}>
                        Voltar para a jogada {index}
                    </button>
                </div>
            ))}
        </div>
    );
};