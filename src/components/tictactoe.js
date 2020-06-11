import React, { useState } from 'react';
import FormGame from './form-game';
import TableGame from './table-game';

const TicTacToe = () => {
    const [state, setState] = useState({
        player1: null,
        player2: null,
        jugada: null,
        turno: true
    });

    const handleChange = e => {
        console.log(e.target.value);
        // name de imputs = que objeto declarado en el state (player1 o player2)
        let data = {
            [e.target.name]: e.target.value
        }
        setState(prevState => {
            return { ...prevState, ...data }
        })
    }
    const handleClick = e => {
        console.log(e.target.innerHTML);
        // name de buttons = que objeto declarado en el state(juagada)
        let data = {
            [e.target.name]: e.target.innerHTML
        }
        setState(prevState => {
            return { ...prevState, ...data }
        })
    }

    const handleChangeJugada = () => {
        let data = {
            jugada: state.jugada === "X" ? "0" : "X",
            turno: !state.turno
        }
        setState(prevState => {
            return { ...prevState, ...data }
        })
    }


    return (
        <>
            <h1>Tic Tac Toe in React.js</h1>
            {
                state.player1 === null || state.player2 === null || state.jugada === null ?
                    (
                        <FormGame handleChange={handleChange} handleClick={handleClick} />
                    ) : (
                        <TableGame {...state} handleChangeJugada={handleChangeJugada} />
                    )
            }
        </>
    )
}

export default TicTacToe