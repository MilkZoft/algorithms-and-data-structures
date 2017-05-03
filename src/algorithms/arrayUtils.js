let spins = 1;

export function createArray(size) {
  const arr = [];

  for (let i = size; i > 0; i--) {
    arr.push(i);
  }

  return arr;
}

export function swap(indexA, indexB, array) {
  const tmp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = tmp;

  console.log(spins++, '-', indexA, indexB, 'SWAPPING===', tmp, array[indexA]);

  return array;
}
