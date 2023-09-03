// function checkTicTacToe(board) {
//     // Проверка выигрышных комбинаций по строкам, столбцам и диагоналям
//     for (let i = 0; i < 3; i++) {
//         // Проверка по строкам
//         if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
//             if (board[i][0] === 1) return 1; // "X" выиграл
//             if (board[i][0] === 2) return 2; // "O" выиграл
//         }
//         // Проверка по столбцам
//         if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
//             if (board[0][i] === 1) return 1; // "X" выиграл
//             if (board[0][i] === 2) return 2; // "O" выиграл
//         }
//     }
    
//     // Проверка по диагоналям
//     if ((board[0][0] === board[1][1] && board[1][1] === board[2][2]) ||
//         (board[0][2] === board[1][1] && board[1][1] === board[2][0])) {
//         if (board[1][1] === 1) return 1; // "X" выиграл
//         if (board[1][1] === 2) return 2; // "O" выиграл
//     }

//     // Проверка на ничью
//     for (let i = 0; i < 3; i++) {
//         for (let j = 0; j < 3; j++) {
//             if (board[i][j] === 0) {
//                 return -1; // Игра еще не закончена
//             }
//         }
//     }

//     // Если никто не выиграл и нет пустых клеток, то это ничья
//     return 0;
// }
// let igra = [
//     [2,2,2],
//     [2,2,2].concat,
//     [2,2,2]
// ]
// console.log(checkTicTacToe(igra));
// function isSolved(board) {
//     board = board.join('-').replace(/,/g,'');
//     if(/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
//     if(/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
//     if(/0/.test(board)) return -1;
//     return 0;
//  }
//  console.log(isSolved(igra));