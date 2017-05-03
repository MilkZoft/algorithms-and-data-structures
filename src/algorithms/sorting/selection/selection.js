import { createArray, swap } from '../../arrayUtils';

let array = createArray(1000);

console.log('UNSORTED', array.toString(), '\n');

selectionSort();

console.log('\nSORTED', array.toString());

function selectionSort() {
  let indexMin;

  for (let i = 0; i < array.length - 1; i++) {
    indexMin = i;

    for (let j = i; j < array.length; j++) {
      if (array[indexMin] > array[j]) {
        indexMin = j;
      }
    }

    if (i !== indexMin) {
      array = swap(i, indexMin, array);
    }
  }
}
