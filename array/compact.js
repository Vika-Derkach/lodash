const compact = (array) => {
  let newArr = [];
  array.forEach((e) => {
    if (e) {
      newArr.push(e);
    }
  });
  return newArr;
};

console.log(compact([0, 1, false, 2, "", 3]));
// => [1, 2, 3]

module.exports = compact;
