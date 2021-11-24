import React,{ useContext } from 'react';
import { GameContext } from '../contexts/GameContext';


export default function Reset(){

    const {dispatch} = useContext(GameContext);

    function handleClickReset () {
        dispatch({type: 'RESET'});
    };
    return(
        <div>
           <p className="reset">
               <button type="button" onClick={handleClickReset}>
                   RESET
               </button>
           </p>
        </div>
    );
};