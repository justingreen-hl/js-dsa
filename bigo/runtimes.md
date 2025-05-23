### Common runtimes are used to quantify the performance of an algorithm as the size of the input data increases. They are usually expressed in Big O notation such as:

* __O(1): Constant time complexity__, the algorithm will always execute in the same time regardless of the size of the input data set.

* __O(N): Linear time complexity__, the running time increases linearly with the size of the input data.

* __O(log N): Logarithmic time complexity__, the running time increases logarithmically with the size of the input data set.

* __O(N log N): Quasilinear time complexity__, slightly worse than linear but better than polynomial.

* __O(N^2): Quadratic time complexity__, the running time increases quadratically with the size of the input data.

* __O(N^3): Cubic time complexity__, the running time increases cubically with the size of the input.

* __O(2^N), O(N!): Exponential and factorial time complexities__ respectively, the running time grows very quickly with the size of the input.
Each of these represent different classes of algorithms and the increase in their running time as the size of input increases. Algorithms with lesser time complexity are generally preferred as they scale better with larger input sizes.