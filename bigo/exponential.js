// O(2^n)
// time complexity will double with every additional element in the input set. 
// Seen in many recursive algorithms, where a problem is divided into two sub-problems of the same type.

function fibonacciRecursive(n) {
  if(n <= 1) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(10));