/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
  var getMineAmount = function (x, y) {
    var result = 0;
    if (board[x - 1]) {
      for (var i = y - 1; i <= y + 1; ++i) {
        if (board[x - 1][i] === 'M') ++result;
      }
    }
    if (board[x + 1]) {
      for (var i = y - 1; i <= y + 1; ++i) {
        if (board[x + 1][i] === 'M') ++result;
      } 
    }
    if (board[x][y - 1] === 'M') ++result;
    if (board[x][y + 1] === 'M') ++result;
    return result;
  };

  var visit = function (x, y) {
    var mineAmount = getMineAmount(x, y);
    if (mineAmount)
      board[x][y] = mineAmount;
    else {
      board[x][y] = 'B';
      if (board[x - 1]) {
        for (var i = y - 1; i <= y + 1; ++i) {
          if (board[x - 1][i] === 'E') visit(x - 1, i);
        }
      }
      if (board[x + 1]) {
        for (var i = y - 1; i <= y + 1; ++i) {
          if (board[x + 1][i] === 'E') visit(x + 1, i);
        } 
      }
      if (board[x][y - 1] === 'E') visit(x, y - 1);
      if (board[x][y + 1] === 'E') visit(x, y + 1);
    }
  };

  if (board[click[0]][click[1]] === 'M') {
    board[click[0]][click[1]] = 'X';
  } else if (board[click[0]][click[1]] === 'E') {
    visit(click[0], click[1]);
  }

  return board;
};
