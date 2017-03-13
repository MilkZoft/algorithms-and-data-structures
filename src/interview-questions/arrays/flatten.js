/*
  Write a function that deeply flatten an array
*/

const array = [1, [2, [[3, 4], 5], 6]];

function flatten(array) {
  return array.reduce((acc, value) => {
    return acc.concat(value instanceof Array ? flatten(value) : value);
  }, []);
}

console.log(flatten(array));
