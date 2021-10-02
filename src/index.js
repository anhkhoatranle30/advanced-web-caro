import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/Game';

// class Game extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       history: [
//         {
//           squares: Array(9).fill(null),
//           lastMove: null,
//         },
//       ],
//       stepNumber: 0,
//       xIsNext: true,
//       isAscending: true,
//     };
//   }

//   handleClick(i) {
//     const history = this.state.history.slice(0, this.state.stepNumber + 1);
//     const current = history[history.length - 1];
//     const squares = current.squares.slice();
//     if (calculateWinner(squares).winner || squares[i]) {
//       return;
//     }
//     squares[i] = this.state.xIsNext ? 'X' : 'O';
//     this.setState({
//       history: history.concat([
//         {
//           squares: squares,
//           lastMove: {
//             col: parseInt(i % 3),
//             row: parseInt(i / 3),
//           },
//         },
//       ]),
//       stepNumber: history.length,
//       xIsNext: !this.state.xIsNext,
//     });
//   }

//   jumpTo(step) {
//     this.setState({
//       stepNumber: step,
//       xIsNext: step % 2 === 0,
//     });
//   }

//   render() {
//     const history = this.state.history;
//     const current = history[this.state.stepNumber];
//     const { winner } = calculateWinner(current.squares);

//     const moves = history.map((step, move) => {
//       const desc = move
//         ? 'Go to move #' +
//           move +
//           `(col: ${step.lastMove.col}, row: ${step.lastMove.row})`
//         : 'Go to game start';
//       return (
//         <li
//           className={this.state.stepNumber === move ? 'boldText' : null}
//           key={move}
//         >
//           <button
//             className={this.state.stepNumber === move ? 'boldText' : null}
//             onClick={() => this.jumpTo(move)}
//           >
//             {desc}
//           </button>
//         </li>
//       );
//     });

//     let status;

//     if (winner) {
//       status = 'Winner: ' + winner;
//     } else {
//       if (!current.squares.includes(null)) {
//         status = 'Draw';
//       } else {
//         status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
//       }
//     }

//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board
//             squares={current.squares}
//             onClick={(i) => this.handleClick(i)}
//             winnerPositions={calculateWinner(current.squares).winnerPositions}
//             boardSize={20}
//           />
//         </div>
//         <div className="game-info">
//           <div>{status}</div>
//           <ol>{this.state.isAscending ? moves : moves.reverse()}</ol>
//         </div>
//         <div>
//           <button
//             onClick={() => {
//               this.setState({
//                 isAccending: !this.state.isAscending,
//               });
//             }}
//           >
//             Sort moves
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));
