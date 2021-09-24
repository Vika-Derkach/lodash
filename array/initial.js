const initial = (array) => {
  let newArr = array.slice(0, array.length - 1);

  return newArr;
};

console.log(initial([1, 2, 3]));
// => [1, 2]
console.log(initial([1, 2, 3, 878, 343, 4545, 5445]));
// => [ 1, 2, 3, 878, 343, 4545 ]
module.exports = initial;
