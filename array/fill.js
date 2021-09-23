const fill = (array, value, start = 0, end = array.length) => {
  let newArr = [];
  array.forEach((e, index) => {
    if (start <= index && index <= end) {
      newArr.push(value);
    } else {
      newArr.push(e);
    }
  });
  return newArr;
};
var array = [1, 2, 3];

console.log(fill(array, "a"));
// => ['a', 'a', 'a']
// console.log(fill(new Array(3), 2));
// // => [2, 2, 2]
console.log(fill([4, 6, 8, 10], "*", 1, 3));
// => [4, '*', '*', 10]

module.exports = fill;
