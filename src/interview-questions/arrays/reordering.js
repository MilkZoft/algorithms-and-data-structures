/*
 Given an input array and another array that describes a new
 index for each element, mutate the input array so that each element ends up
 in their new index. Discuss the runtime of the algorithm and how you can be
 sure there won't be any infinite loops.
*/

let array = ['A', 'B', 'C', 'D', 'E', 'F'];
const indices = [2, 3, 4, 0, 5, 1];

array = indices.map((value, index) => {
  return array[indices.indexOf(index)];
});

// returns: ["D", "F", "A", "B", "C", "E"]
