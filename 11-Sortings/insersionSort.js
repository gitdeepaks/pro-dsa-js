function insersionSort(array) {
  //start from second position

  for (let i = 0; i < array.length; i++) {
    let currentElement = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > currentElement) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = currentElement;
    console.log(`[${array.join(", ")}]`);
  }
}

let array = [1, 6, 7, 4, 9];
insersionSort(array);
