import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import TicTacToe from './components/tictactoe.js';

ReactDOM.render(
  <React.StrictMode>
    <TicTacToe />
  </React.StrictMode>,
  document.getElementById('root')
);

