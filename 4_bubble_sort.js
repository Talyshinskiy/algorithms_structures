// Bubble sort
// O(n*n )

const arr = [
  0, 3, 2, 5, 6, 44, 9, 100, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 3, 32,
]; // [0,1,1,2,3.......]
let count = 0;

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
      count += 1;
    }
  }
  return array;
}

console.log("length", arr.length);
console.log(bubbleSort(arr)); // O(n*n)
console.log("count = ", count);
;