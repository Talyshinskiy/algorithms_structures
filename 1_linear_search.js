// Linear_search

// algorithm complexity O(n)

const array = [1, 3, 5, 6, 4, 7, 8, 34, 22, 10];

let count = 0;

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (item === array[i]) {
      return item;
    }
  }
  return null;
}

console.log(linearSearch(array, 22));
console.log("count:", count);
