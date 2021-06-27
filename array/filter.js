const filter = (array, callback) => {
  let newArr = [];

  array.forEach((e) => {
    if (callback(e)) {
      newArr.push(e);
    }
  });
  return newArr;
};
const arr = [1, -2, 3, -4];
console.log(filter(arr, (currentValue) => currentValue < 0));
// => [1, 2, 3]

module.exports = filter;
