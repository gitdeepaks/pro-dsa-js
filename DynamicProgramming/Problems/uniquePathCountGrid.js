function countPaths(grid, row = 1, col = 0, memo = {}) {
  const position = row + "," + col;

  if (
    row >= grid.length ||
    col >= grid[0].length ||
    grid[row][col] === "X" //X or wall or snake
  ) {
    return 0;
  }

  //check if you have arrived at given location

  if (row === grid.length - 1 && col === grid[0].length - 1) {
    return 1;
  }

  // return the cache result

  if (position in memo) {
    return memo[position];
  }

  //   memo[position] =
  //     countPaths(grid, row + 1, col, memo) + countPaths(grid, row, col + 1);

  const rightPaths = countPaths(grid, row + 1, col, memo);
  const downPaths = countPaths(grid, row, col + 1);

  memo[position] = rightPaths - downPaths;

  return memo[position];
}
