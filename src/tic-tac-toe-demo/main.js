import { useState } from 'react';
import './css/style.css'


export default function TicTacToe(){
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];
    const xIsNext = currentMove % 2 === 0;
    const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

    return(
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
       <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
    );

    function handlePlay(nexSquare){
        const nextHistory = [...history.slice(0, currentMove + 1), nexSquare];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

     function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }



}

function Board({xIsNext,squares,onPlay}){
    let status;
    const winner = calculateWinner(squares);
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }
    function handleClickX(i){
        if(squares[i] || calculateWinner(squares)){
            return;
        }
        const nextSquare = squares.slice();
        if(xIsNext){
            nextSquare[i] = 'X';
        }else{
            nextSquare[i] = 'O';
        }
        onPlay(nextSquare);
    }

    return (
    <>
        <div className="status">{status}</div>
        <div className="board-row">
            <Square value={squares[0]} onSquareClick={() => handleClickX(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClickX(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClickX(2)} />
        </div>
        <div className="board-row">
            <Square value={squares[3]} onSquareClick={() => handleClickX(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClickX(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClickX(5)} />
        </div>   
        <div className="board-row">
            <Square value={squares[6]} onSquareClick={() => handleClickX(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClickX(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClickX(8)} />
        </div>    
    </>  
    );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Square({value,onSquareClick}){
    return <button className="square" onClick={onSquareClick}>{value}</button>
}

