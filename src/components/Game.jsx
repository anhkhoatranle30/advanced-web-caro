import React, { useState } from 'react';

export default function Game() {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
      lastMove: null,
    },
  ]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [isAscending, setIsAscending] = useState(false);

  return <div></div>;
}
