function bubbleSort(array) {
  let isSwaped;

  do {
    isSwaped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        isSwaped = true;
      }
    }
  } while (isSwaped);
  return array;
}
