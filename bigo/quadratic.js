// O(n^2)
// Quadratic also referred to as Polynomial
const arr = [1,2,3,4,5,6,7];

for(let i = 0; i < arr.length; i++) {
  console.log(i);
  for(let j = 1; j < arr.length; j++) {
    console.log(arr[j]);
  }
}

// a nested for loop is an easy way to remember this time complexity