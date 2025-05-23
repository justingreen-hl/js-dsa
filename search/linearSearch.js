// Linear search
const arr1 = [1,2,3,4,5,6,7];

function linearSearch(arr, target) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === target) return `Target found: ${target}`
  }
  return "Target not found";
}

console.log(linearSearch(arr1, 7));