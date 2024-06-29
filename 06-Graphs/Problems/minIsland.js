function minIslandSize(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const visited = new Set();
  let smallestSize = Infinity;

  function exploreSize(r, c) {
    const pos = r + "," + "r";
    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= cols ||
      grid[r][c] === "W" ||
      visited.has(pos)
    ) {
      return 0;
    }

    visited.add(pos);
    let size = 1;

    size += exploreSize(r + 1, c);
    size += exploreSize(r - 1, c);
    size += exploreSize(r, c + 1);
    size += exploreSize(r, c - 1);

    return size;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      grid[r][c];
      if (grid[r][c] === "L" && !visited.has(r + "," + "r")) {
        const size = exploreSize(r, c);
        if (size < smallestSize) {
          smallestSize = size;
        }
      }
    }
  }
}

function maxIslandSize(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const visited = new Set();
  let smallestSize = 0;

  function exploreSize(r, c) {
    const pos = r + "," + "r";
    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= cols ||
      grid[r][c] === "W" ||
      visited.has(pos)
    ) {
      return 0;
    }

    visited.add(pos);
    let size = 1;

    size += exploreSize(r + 1, c);
    size += exploreSize(r - 1, c);
    size += exploreSize(r, c + 1);
    size += exploreSize(r, c - 1);

    return size;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      grid[r][c];
      if (grid[r][c] === "L" && !visited.has(r + "," + "r")) {
        const size = exploreSize(r, c);
        if (size > smallestSize) {
          smallestSize = size;
        }
      }
    }
  }
}
