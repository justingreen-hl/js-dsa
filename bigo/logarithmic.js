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

// A common example of a logarithmic algorithm is binary search. 
// It works on sorted data by repeatedly dividing the search interval in half. 
// If the middle element is the target value, the search is successful. 
// If the target is less than the middle element, the search continues in the left half; otherwise, it continues in the right half. 
// This process continues until the target is found or the interval is empty.