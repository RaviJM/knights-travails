function createCell(row, col) {
  const arr = [row, col];
  return arr;
}

// make a queue

let queue = [];
let start = -1;
let end = -1;

function enqueue(queue, element) {
  if (start == -1) {
    // if its the first element
    start = 0;
    end = 0;
    queue[end] = element;
  } else {
    end++;
    queue[end] = element;
  }
}

function dequeue(queue) {
  let element = null;

  // check if queue is empty
  if (start > end || start == -1) {
    return "Queue is empty!";
  } else {
    element = queue[start];
    start++;

    if (start > end) {
      start = -1;
      end = -1;
    }
  }

  return element;
}

function isEmpty(queue) {
  if (start > end || start == -1 || end == -1) {
    return true;
  } else {
    return false;
  }
}

function printQueue(queue) {
  let q = [];
  for (let i = start; i <= end; i++) {
    q.push(queue[i]);
  }
  return q;
}

function knightMoves([a, b], [c, d]) {
  // if illegal move requested
  if (a >= 8 || b >= 8 || c >= 8 || d >= 8) {
    return "Move not possible!";
  } else {
    let visited = [];
    let parent = new Map();

    let startCell = createCell(a, b);

    enqueue(queue, startCell);
    visited.push(startCell);

    while (!isEmpty(queue)) {
      let cell = dequeue(queue);
      // console.log(cell);

      // check if its the goal
      if (cell[0] == c && cell[1] == d) {
        // console.log("Reached!");
        printPath(parent, startCell, cell);
        return;
      } else {
        // find its neighbors (next legal moves from this move)

        let chessBoard = [
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
        ];

        let currentRow = cell[0];
        let currentCol = cell[1];

        let nextRow = null;
        let nextCol = null;

        // mark the possible next moves from this move on the chessBoard

        if (currentRow + 1 < 8 && currentCol + 2 < 8) {
          nextRow = currentRow + 1;
          nextCol = currentCol + 2;
          chessBoard[nextRow][nextCol] = 1;
        }

        if (currentRow + 2 < 8 && currentCol + 1 < 8) {
          nextRow = currentRow + 2;
          nextCol = currentCol + 1;
          chessBoard[nextRow][nextCol] = 1;
        }

        if (currentRow + 2 < 8 && currentCol - 1 > -1) {
          nextRow = currentRow + 2;
          nextCol = currentCol - 1;
          chessBoard[nextRow][nextCol] = 1;
        }

        if (currentRow + 1 < 8 && currentCol - 2 > -1) {
          nextRow = currentRow + 1;
          nextCol = currentCol - 2;
          chessBoard[nextRow][nextCol] = 1;
        }

        if (currentRow - 1 > -1 && currentCol - 2 > -1) {
          nextRow = currentRow - 1;
          nextCol = currentCol - 2;
          chessBoard[nextRow][nextCol] = 1;
        }

        if (currentRow - 2 > -1 && currentCol - 1 > -1) {
          nextRow = currentRow - 2;
          nextCol = currentCol - 1;
          chessBoard[nextRow][nextCol] = 1;
        }

        if (currentRow - 2 > -1 && currentCol + 1 < 8) {
          nextRow = currentRow - 2;
          nextCol = currentCol + 1;
          chessBoard[nextRow][nextCol] = 1;
        }

        if (currentRow - 1 > -1 && currentCol + 2 < 8) {
          nextRow = currentRow - 1;
          nextCol = currentCol + 2;
          chessBoard[nextRow][nextCol] = 1;
        }

        // enqueue these marked moves if not already visited
        for (let i = 0; i < 8; i++) {
          for (let j = 0; j < 8; j++) {
            if (chessBoard[i][j] == 1) {
              // enqueue
              let wannaEnqueue = true;
              let c = createCell(i, j);
              visited.forEach((element) => {
                if (element[0] == c[0] && element[1] == c[1]) {
                  wannaEnqueue = false;
                }
              });
              if (wannaEnqueue) {
                enqueue(queue, c);
                visited.push(c);
                parent.set(c.toString(), cell);
              }
            }
          }
        }
      }
    }
  }
}

function printPath(parent, startCell, endCell) {
  let path = [];
  let current = endCell;
  while (current) {
    path.push(current);
    current = parent.get(current.toString());
  }
  path.reverse();
  console.log("Path:", path);
}

// knightMoves([4, 3], [1, 6]);
knightMoves([0, 0], [0, 1]);
