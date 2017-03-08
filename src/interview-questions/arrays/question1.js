/*
  We have an array of objects A and an array of indexes B.
  Reorder objects in array A with given indexes in array B. Do not change array A's length.

  Example:
  let a = [C, D, E, F, G];
  let b = [3, 0, 4, 1, 2];

  sort(a, b);
  // a is now [D, F, G, C, E];
  // b is now [0, 1, 2, 3, 4]
*/

function swap(array, indexA, indexB) {
  const tmp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = tmp;

  return array;
}

function sort(a, b) {
  for (let i = 0; i < b.length; i++) {
    if (i !== b[i]) {
      a = swap(a, i, b[i]);
      b = swap(b, i, b[i]);
    }
  }

  return a;
}

sort(['C', 'D', 'E', 'F', 'G'], [3, 0, 4, 1, 2]);
