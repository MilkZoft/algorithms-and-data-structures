import { createArray } from '../../arrayUtils';

const array = createArray(5);

console.log('UNSORTED', array.toString(), '\n');

insertionSort();

console.log('\nSORTED', array.toString());

function insertionSort() {
  let j;
  let tmp;

  for (let i = 1; i < array.length; i++) {
    j = i;
    tmp = array[i];
    console.log(j, tmp);

    while (j > 0 && array[j - 1] > tmp) {
      array[j] = array[j - 1];
      j--;
    }
    console.log('J', j);
    array[j] = tmp;
  }
}
