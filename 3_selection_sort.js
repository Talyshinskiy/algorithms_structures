// Selection sort
//

const arr = [
  0, 3, 2, 5, 6, 44, 9, 100, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 3, 32,
]; // [0,1,1,2,3.......]
let count = 0;

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
      count++;
    }
    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }
  return array;
}

console.log(selectionSort(arr));
console.log(arr.length); // O(n*n)
console.log("count = ", count);
