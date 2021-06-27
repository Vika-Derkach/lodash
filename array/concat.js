const concat = (...array) => {
  let newArr = [];
  array.forEach((e) => {
    if (!Array.isArray(e)) {
      newArr.push(e);
    } else {
      return newArr.push(...e);
    }
  });
  return newArr;
};

var array = [1, 2];
var other = concat(array, 5, [3], [[4]]);

console.log(other);
// => [1, 2, 3, [4]]

console.log(array);
// => [1]

module.exports = concat;
