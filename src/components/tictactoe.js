import React, { useState } from 'react';

const TicTacToe = props => {
    const [jugada, setJugada] = useState({
        player1 : "",
        player2 : "",
        seleccion : "",
        options : ["X", "O"],
        cuad1 : "", 
        cuad2 : "",
        cuad3 : "",
        cuad4 : "",
        cuad5 : "",
        cuad6 : "",
        cuad7 : "",
        cuad8 : "",
        cuad9 : ""
    });
    
    const handleChange = e => {
        setJugada ({
            ...jugada,
            [e.target.name]: e.target.value
        })
    }

    const handleChange2 = e => {
        console.log(e.target.innerHTML);
        setJugada ({
            ...jugada,
            seleccion: e.target.innerHTML
        })
    }

    const realizarJugada = e => {
        if(jugada[e.target.id] === ""){
            setJugada ({
                ...jugada,
                [e.target.id]: jugada.seleccion,
                seleccion: jugada.seleccion === "X"? "O":"X",
            })
        }
    }

    
   

    return (
        <>
            <div className="instrucciones">
                <h2>Pick a Weapon</h2>
            </div>
            <div className="elijetuArma">
                <h3>Choose your weapon</h3>
                <div className="opciones">
                    <input type="text" name="player1" placeholder="Player 1 Username" onChange={handleChange} />
                    <input type="text" name="player2" placeholder="Player 2 Username" onChange={handleChange} />
                    <button id="equis" onClick={handleChange2}>X</button>
                    <button id="cero" onClick={handleChange2}>O</button>
                </div>
            </div>
            <div className="tablero">
                <div className="cuadrante" id="cuad1" onClick={(e) => realizarJugada(e)}>
                    {jugada.cuad1}
                </div>
                <div className="cuadrante" id="cuad2" onClick={(e) => realizarJugada(e)}>
                    {jugada.cuad2}
                </div>
                <div className="cuadrante" id="cuad3" onClick={(e) => realizarJugada(e)}>
                    {jugada.cuad3}
                </div>
                <div className="cuadrante" id="cuad4" onClick={(e) => realizarJugada(e)}>
                    {jugada.cuad4}
                </div>
                <div className="cuadrante" id="cuad5" onClick={(e) => realizarJugada(e)}>
                    {jugada.cuad5}
                </div>
                <div className="cuadrante" id="cuad6" onClick={(e) => realizarJugada(e)}>
                    {jugada.cuad6}
                </div>
                <div className="cuadrante" id="cuad7" onClick={(e) => realizarJugada(e)}>
                    {jugada.cuad7}
                </div>
                <div className="cuadrante" id="cuad8" onClick={(e) => realizarJugada(e)}>
                    {jugada.cuad8}
                </div>
                <div className="cuadrante" id="cuad9" onClick={(e) => realizarJugada(e)}>
                    {jugada.cuad9}
                </div>
            </div>

        </>
    )
}

export default TicTacToe