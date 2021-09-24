const flatten = (array) => {
  let newArr = [];
  array.forEach((e) => {
    if (Array.isArray(e)) {
      e.map((el) => newArr.push(el));
    } else {
      newArr.push(e);
    }
  });
  return newArr;
};

console.log(flatten([1, [2, [3, [4]], 5]]));
// => [1, 2, [3, [4]], 5]
console.log(flatten([1, 2, [3, 4, [5, 6, [6]]], 5]));
// => [ 1, 2, 3, 4, [ 5, 6, [ 6 ] ], 5 ]
console.log(flatten([1, 2, [1], 5]));
// => [ 1, 2, 1, 5 ]
module.exports = flatten;
