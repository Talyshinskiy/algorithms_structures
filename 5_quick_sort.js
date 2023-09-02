// Quick sort - быстрая сортировка
// O(log2 n * n)

const arr = [
  0, 3, 2, 5, 6, 8, 4, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35,
  6, 3, 32, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 36, 44,134
];

let count = 0;

const quickSort = (array) => {
  if (array.length <= 1) return array;
  let pivatIndex = Math.floor(array.length / 2);
  let pivat = array[pivatIndex];
  let less = [];
  let greater = [];
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (i === pivatIndex) continue;
    if (array[i] < pivat) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }
  return [...quickSort(less), pivat, ...quickSort(greater)];
};

console.log(quickSort(arr));
console.log("count", count);
