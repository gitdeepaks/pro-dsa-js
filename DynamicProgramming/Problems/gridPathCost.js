function maxPathCost(grid, row = 1, col = 0, memo = {}) {
  const position = row + "," + col;

  // return the cache result

  if (position in memo) {
    return memo[position];
  }

  if (
    row >= grid.length ||
    col >= grid[0].length
    //grid[row][col] === "X" //X or wall or snake
  ) {
    return -Infinity;
  }

  //check if you have arrived at given location

  if (row === grid.length - 1 && col === grid[0].length - 1) {
    return grid[row][col];
  }

  //   memo[position] =
  //     maxPathCost(grid, row + 1, col, memo) + countPaths(grid, row, col + 1);

  const rightPaths = maxPathCost(grid, row + 1, col, memo);
  const downPaths = maxPathCost(grid, row, col + 1, memo);

  memo[position] = grid[row][col] + Math.max(rightPaths - downPaths);

  return memo[position];
}
