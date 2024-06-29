// [1,2,3,]

function countKeryInArray(array: [], key: number) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] == key) {
      count++;
    }
  }
  return count;
}

// recursive appraoch

function recCountKey(array: [], key: number, index: number): number {
  if (index >= array.length) {
    return 0;
  }
  return (array[index] === key ? 1 : 0) + recCountKey(array, key, index + 1);
}
