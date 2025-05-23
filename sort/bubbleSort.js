function bubbleSort(arr) {
  let length = arr.length;
  let swapped;
  do {
    swapped = false;
    for(let i = 0; i < length - 1; i++) {
      if(arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    length--; // reduce length to avoid re-checking sorted elements
  } while(swapped);
  return arr;
}

let array = [5, 1, 4, 2, 8];
let sortedArray = bubbleSort(array);
console.log(sortedArray);