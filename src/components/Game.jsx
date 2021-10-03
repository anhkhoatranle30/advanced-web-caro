import React, { useState } from 'react';
import Board from './Board';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], winnerPositions: [a, b, c] };
    }
  }
  return { winner: null, winnerPositions: [] };
}

export default function Game() {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
      lastMove: null,
    },
  ]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [isAscending, setIsAscending] = useState(true);
  const [boardSize, setBoardSize] = useState(5);

  const handleClick = (i) => {
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares).winner || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory(
      history.concat([
        {
          squares: squares,
          lastMove: {
            col: parseInt((i % boardSize) + 1),
            row: parseInt(i / boardSize + 1),
          },
        },
      ])
    );
    setStepNumber(history.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const current = history[stepNumber];
  const moves = history.map((step, move) => {
    const desc = move
      ? 'Go to move #' +
        move +
        `(col: ${step.lastMove.col}, row: ${step.lastMove.row})`
      : 'Go to game start';
    return (
      <li className={stepNumber === move ? 'boldText' : null} key={move}>
        <button
          className={stepNumber === move ? 'boldText' : null}
          onClick={() => jumpTo(move)}
        >
          {desc}
        </button>
      </li>
    );
  });
  const { winner } = calculateWinner(current.squares);

  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    if (!current.squares.includes(null)) {
      status = 'Draw';
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={(i) => handleClick(i)}
          winnerPositions={calculateWinner(current.squares).winnerPositions}
          boardSize={boardSize}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{isAscending ? moves : moves.reverse()}</ol>
      </div>
      <div>
        <button
          onClick={() => {
            setIsAscending(!isAscending);
          }}
        >
          Sort moves
        </button>
      </div>
      <div className="game-board-size-input">
        <label for="board-size">Board size (between 5 and 20):</label>
        <input
          type="number"
          id="board-size"
          name="board-size"
          min="5"
          max="20"
          value={boardSize}
          onChange={(e) => {
            const size = e.target.value;
            if (size < 5 || size > 20) {
              setBoardSize(5);
            } else {
              setBoardSize(size);
              setHistory(history.slice(0, 1));
            }
          }}
          disabled={stepNumber > 0}
        />
      </div>
    </div>
  );
}
