const drop = (array, n = 1) => {
  let newArr = [];

  array.forEach((e, index) => {
    if (index >= n) {
      newArr.push(e);
    }
  });

  return newArr;
};

console.log(drop([1, 2, 3]));
// => [2, 3]
console.log(drop([1, 2, 3], 2));
// => [3]
console.log(drop([1, 2, 3, 4], 2));

console.log(drop([1, 2, 3], 5));
// => []
console.log(drop([1, 2, 3], 0));
// => [1, 2, 3]

module.exports = drop;
