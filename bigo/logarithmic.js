// O(log n)
// Logarithmic time complexity, the running time increases logarithmically with the size of the input data set.

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length -  1;

  while(left <= right) {
    let middle = Math.floor((left + right) / 2);
    if(arr[middle] === target) return "Target found"
    else if(arr[middle] < target) {
      left = middle + 1;
    }else {
      right = middle - 1;
    }
  }

  return "Target not found";
} 

const sortedArray = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const targetValue = 23;

console.log(binarySearch(sortedArray, targetValue))

//Binary search is a classic example of logarithmic time complexity where at every step, the algorithm breaks the list into half until it finds the desired element. 
// As the size of the input increases, the growth of the time taken by an algorithm with logarithmic complexity grows slowly because it divides the problem into smaller parts in each step.