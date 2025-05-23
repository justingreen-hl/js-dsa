// Binary search
// Divide and conquer, divide the search interval in half repeatedly

const arr1 = [1,2,3,4,5,6,7]

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while(left <= right) {
    let middle = Math.floor((left + right) / 2);
    console.log(middle)
    if(arr[middle] === target) return `target found: ${target}`;
    else if(arr[middle] < target) {
      left = middle + 1;
    }else {
      right = middle - 1
    }
  }
  return false;
}

console.log(binarySearch(arr1, 4));