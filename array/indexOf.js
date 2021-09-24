const indexOf = (array, value, fromIndex = 0) => {
  let kaput = -1;
  array.forEach((e, index) => {
    if (fromIndex < index && value === e && kaput === -1) {
      kaput = index;
    }
  });
  return kaput;
};

console.log(indexOf([1, 2, 1, 2], 2));
// => 1
console.log(indexOf([1, 2, 1, 2], 5));
// => -1
console.log(indexOf([1, 2, 1, 2], 2, 2));
// => 3

module.exports = indexOf;
