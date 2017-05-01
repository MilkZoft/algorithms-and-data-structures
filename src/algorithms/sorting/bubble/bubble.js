const array = createArray(1000);
let spins = 1;
console.log('UNSORTED', array);

bubleSort();

console.log('SORTED', array);

function createArray(size) {
  const arr = [];

  for (let i = size; i > 0; i--) {
    arr.push(i);
  }

  return arr;
}

function swap(indexA, indexB) {
  const tmp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = tmp;

  console.log(spins++, '-', indexA, indexB, 'SWAPPING===', tmp, array[indexA]);
}

function bubleSort() {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(j, j + 1);
      }
    }
  }
}
