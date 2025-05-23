// O(n!)
// Worst case scenario of complexity, represents an extremely high growth rate.
// Traveling salesmen problem is a common algorithm with O(n!)

function getPermutations(arr) {
  if (arr.length <= 1) {
    return [arr];
  }

  const permutations = [];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
    const subPermutations = getPermutations(remaining);

    for (let j = 0; j < subPermutations.length; j++) {
      permutations.push([current].concat(subPermutations[j]));
    }
  }
  return permutations;
}

const items = [1, 2, 3];
const allPermutations = getPermutations(items);
console.log(allPermutations);
// Output:
// [
//   [ 1, 2, 3 ],
//   [ 1, 3, 2 ],
//   [ 2, 1, 3 ],
//   [ 2, 3, 1 ],
//   [ 3, 1, 2 ],
//   [ 3, 2, 1 ]
// ]