//Binary search.js
// O(n log n)

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let count = 0;

function binarySearsch(array, item) {
  let start = 0;
  let end = array.length;
  let middle;
  let found = false;
  let position = -1;
  while (found === false && start <= end) {
    count += 1;
    middle = Math.floor((start + end) / 2);
    if (array[middle] === item) {
      found = true;
      position = middle;
      return position;
    }
    if (item < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return position;
}

// console.log("binary_searsch 1", binary_searsch(array, 9));
// // console.log("count:", count);

// console.log("binary_searsch 2", binary_searsch(array, 3));
// // console.log("count:", count);

// console.log("binary_searsch 3", binary_searsch(array, 1));
// console.log("count:", count);

console.log("binary_searsch 4", binarySearsch(array, 1));
console.log("count:", count);
