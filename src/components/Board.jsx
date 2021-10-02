import React from 'react';
import Square from './Square';

export default function Board({
  squares,
  winnerPositions,
  onClick,
  boardSize,
}) {
  const renderSquare = (i) => {
    return (
      <Square
        value={squares[i]}
        onClick={() => onClick(i)}
        key={`square-${i}`}
        isWinner={winnerPositions.includes(i) ? true : false}
      />
    );
  };

  const renderSquares = () => {
    let result = [];
    for (let i = 0; i < boardSize; i++) {
      let row = [];
      for (let j = 0; j < boardSize; j++) {
        row.push(renderSquare(i * boardSize + j));
      }
      const boardRow = (
        <div key={`board-row-${i}`} className="board-row">
          {row}
        </div>
      );
      result.push(boardRow);
    }

    return result;
  };

  return renderSquares();
}
