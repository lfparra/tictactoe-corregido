import React, { useState } from 'react';

const TableGame = (props) => {

    const [cuadrantes, setCuadrantes] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ])

    const [partida, setPartida] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ])

    const [jugadaGanadora, setJugadaGanadora] = useState([
        [true, true, true],
        [null, null, null],
        [null, null, null],
    ],
    [
        [null, null, null],
        [true, true, true],
        [null, null, null],
    ],
    [
        [null, null, null],
        [null, null, null],
        [true, true, true],
    ],
    [
        [true, null, null],
        [true, null, null],
        [true, null, null],
    ],
    [
        [null, true, null],
        [null, true, null],
        [null, true, null],
    ],
    [
        [null, null, true],
        [null, null, true],
        [null, null, true],
    ],
    [
        [true, null, null],
        [null, true, null],
        [null, null, true],
    ],
    [
        [null, null, true],
        [null, true, null],
        [true, null, null]
    ],
    [
        [false, false, false],
        [null, null, null],
        [null, null, null],
    ],  
    [
        [null, null, null],
        [false, false, false],
        [null, null, null],
    ],
    [
        [null, null, null],
        [null, null, null],
        [false, false, false],
        
    ],
    [
        [false, null, null],
        [false, null, null],
        [false, null, null],
    ],
    [
        [null, false, null],
        [null, false, null],
        [null, false, null],
    ],
    [
        [null, null, false],
        [null, null, false],
        [null, null, false],
    ],
    [
        [false, null, null],
        [null, false, null],
        [null, null, false],
    ],
    [
        [null, null, false],
        [null, false, null],
        [false, null, null]
    ])
    
    const setValor = (x, y) => {
        if (cuadrantes[x][y] === null) {
            cuadrantes[x][y] = props.jugada;
            partida[x][y] = props.turno;
            setCuadrantes(cuadrantes);
            console.log(props.jugada);
            /* setWinner();  */
            console.log(partida[x][y]);
        }
    }

   /*  const setWinner = (partida, jugadaGanadora) => {
       for(let i=0; i<jugadaGanadora.length; i++){
           console.log(jugadaGanadora[i]);
       }
        
    }  
 */
   

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3>Turn: {props.turno ? props.player1 : props.player2}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td onClick={(e) => {
                                        setValor(0, 0);
                                        props.handleChangeJugada(e);
                                    }}>{cuadrantes[0][0]}</td>
                                    <td onClick={(e) => {
                                        setValor(0, 1);
                                        props.handleChangeJugada(e);
                                    }}>{cuadrantes[0][1]}</td>
                                    <td onClick={(e) => {
                                        setValor(0, 2);
                                        props.handleChangeJugada(e);
                                    }}>{cuadrantes[0][2]}</td>
                                </tr>
                                <tr>
                                    <td onClick={(e) => {
                                        setValor(1, 0);
                                        props.handleChangeJugada(e);
                                    }}>{cuadrantes[1][0]}</td>
                               
                                    <td onClick={(e) => {
                                        setValor(1, 1);
                                        props.handleChangeJugada(e);
                                    }}>{cuadrantes[1][1]}</td>
                               
                                    <td onClick={(e) => {
                                        setValor(1, 2);
                                        props.handleChangeJugada(e);
                                    }}>{cuadrantes[1][2]}</td>
                                </tr>
                                <tr>
                                    <td onClick={(e) => {
                                        setValor(2, 0);
                                        props.handleChangeJugada(e);
                                    }}>{cuadrantes[2][0]}</td>
                                
                                    <td onClick={(e) => {
                                        setValor(2, 1);
                                        props.handleChangeJugada(e);
                                    }}>{cuadrantes[2][1]}</td>
                                
                                    <td onClick={(e) => {
                                        setValor(2, 2);
                                        props.handleChangeJugada(e);
                                    }}>{cuadrantes[2][2]}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}


export default TableGame;