function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    let pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
}

function partition(arr, low, high) {
  let pivot = arr[high];

  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      //swap
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  //final swap of pivot in ith value
  [arr[i + 1], arr[high]] = [arr[high], arr[i]];
  return i + 1;
}
