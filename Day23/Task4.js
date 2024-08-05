/*
Activity-4[N-Queens]
Task-4:Solve the "N-Queens" problem on Leetcode.
Write a function that places n queens on an n*n chessboard such that no solutions to the n-queens puzzle.
Log the distinct solutions for a few test cases.
*/

function solveNQueens(n) {
  const solutions = [];
  const board = Array.from({ length: n }, () => Array(n).fill("."));
  backtrack(board, 0, solutions);
  return solutions;
}

function backtrack(board, row, solutions) {
  if (row === board.length) {
    solutions.push(board.map((r) => r.join("")));
    return;
  }

  for (let col = 0; col < board.length; col++) {
    if (isSafe(board, row, col)) {
      board[row][col] = "Q";
      backtrack(board, row + 1, solutions);
      board[row][col] = ".";
    }
  }
}

function isSafe(board, row, col) {
  for (let i = 0; i < row; i++) {
    if (board[i][col] === "Q") return false;
  }

  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === "Q") return false;
  }

  for (let i = row, j = col; i >= 0 && j < board.length; i--, j++) {
    if (board[i][j] === "Q") return false;
  }

  return true;
}

// Test cases
let testCases = [4, 5];

testCases.forEach((n) => {
  console.log(`N = ${n}`);
  const solutions = solveNQueens(n);
  solutions.forEach((solution, index) => {
    console.log(`Solution ${index + 1}:`);
    solution.forEach((row) => console.log(row));
    console.log("");
  });
});
