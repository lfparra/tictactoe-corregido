import React from 'react';
import './index.css';
import TicTacToe from './components/tictactoe.js';

const App = () => {
  return (
    <>
    <h1>Tic Tac Toe in React.js</h1>
    <div className="container">
      <TicTacToe />
    </div>
    </>
  )
}

export default App;


