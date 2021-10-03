const checkEquals = (...args) => {
  for (let i = 0; i < args[0].length; i++) {
    if (args[0][0] !== args[0][i]) return false;
  }
  return true;
};

const mapArrayTo2DArray = (arr) => {
  const result = [];
  const size = Math.sqrt(arr.length);
  for (let i = 0; i < size; i++) {
    const row = [];
    for (let j = 0; j < size; j++) {
      row.push(arr[i * size + j]);
    }
    result.push(row);
  }
  return result;
};

const calculateWinner = (squares1D) => {
  const result = {
    winner: null,
    winnerPositions: [],
  };

  const squares = mapArrayTo2DArray(squares1D);

  const size = squares.length;

  for (let i = 0; i < squares.length; i++) {
    for (let j = 0; j < squares.length; j++) {
      const player = squares[i][j];
      if (player) {
        //   vertically
        if (i + 4 < squares.length) {
          const turns = [];
          const positions = [];
          for (let k = i; k < i + 5; k++) {
            turns.push(squares[k][j]);
            positions.push(k * size + j);
          }
          if (checkEquals(turns)) {
            result.winner = player;
            result.winnerPositions = positions;
          }
        }
        if (i - 4 > 0) {
          const turns = [];
          const positions = [];
          for (let k = i; k > i - 5; k--) {
            turns.push(squares[k][j]);
            positions.push(k * size + j);
          }
          if (checkEquals(turns)) {
            result.winner = player;
            result.winnerPositions = positions;
          }
        }
        //   horizonally
        if (j + 4 < squares.length) {
          const turns = [];
          const positions = [];
          for (let k = j; k < j + 5; k++) {
            turns.push(squares[i][k]);
            positions.push(i * size + k);
          }
          if (checkEquals(turns)) {
            result.winner = player;
            result.winnerPositions = positions;
          }
        }
        if (j - 4 >= 0) {
          const turns = [];
          const positions = [];
          for (let k = j; k > j - 5; k--) {
            turns.push(squares[i][k]);
            positions.push(i * size + k);
          }
          if (checkEquals(turns)) {
            result.winner = player;
            result.winnerPositions = positions;
          }
        }
        //   diagnostically
        if (i + 4 < squares.length) {
          if (j + 4 < squares.length) {
            const turns = [];
            const positions = [];
            for (let k = 0; k < 5; k++) {
              turns.push(squares[i + k][j + k]);
              positions.push((i + k) * size + (j + k));
            }
            if (checkEquals(turns)) {
              result.winner = player;
              result.winnerPositions = positions;
            }
          }
          if (j - 4 >= 0) {
            const turns = [];
            const positions = [];
            for (let k = 0; k < 5; k++) {
              turns.push(squares[i + k][j - k]);
              positions.push((i + k) * size + (j - k));
            }
            if (checkEquals(turns)) {
              result.winner = player;
              result.winnerPositions = positions;
            }
          }
        }
        if (i - 4 > 0) {
          if (j + 4 < squares.length) {
            const turns = [];
            const positions = [];
            for (let k = 0; k < 5; k++) {
              turns.push(squares[i - k][j + k]);
              positions.push((i - k) * size + (j + k));
            }
            if (checkEquals(turns)) {
              result.winner = player;
              result.winnerPositions = positions;
            }
          }
          if (j - 4 >= 0) {
            const turns = [];
            const positions = [];
            for (let k = 0; k < 5; k++) {
              turns.push(squares[i - k][j - k]);
              positions.push((i - k) * size + (j - k));
            }
            if (checkEquals(turns)) {
              result.winner = player;
              result.winnerPositions = positions;
            }
          }
        }
      }
    }
  }

  return result;
};

export default calculateWinner;
