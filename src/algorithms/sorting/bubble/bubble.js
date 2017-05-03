import { createArray, swap } from '../../arrayUtils';

let array = createArray(10);

console.log('UNSORTED', array.toString(), '\n');

bubleSort();

console.log('\nSORTED', array.toString());

function bubleSort() {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        array = swap(j, j + 1, array);
      }
    }
  }
}
