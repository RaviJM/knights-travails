function createCell(row, col) {
  return { row, col };
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
  }
}
