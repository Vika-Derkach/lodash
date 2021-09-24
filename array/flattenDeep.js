const flattenDeep = (array) => {
  let newArr = [];

  array.forEach((e) => {
    if (Array.isArray(e)) {
      //   console.log(Array(e));
      //   Array(e).map((el) => newArr.push(el));
      let arr = Array.isArray(e);

      e.map((el) => {
        if (Array.isArray(el)) {
          el.map((elem) => newArr.push(elem));
        } else {
          newArr.push(el);
        }
      });
    } else {
      newArr.push(e);
    }
  });
  return newArr;
};

console.log(flattenDeep([1, [2, [3, [4]], 5]]));
// => [1, 2, 3, 4, 5]

module.exports = flattenDeep;
