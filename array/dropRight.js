const dropRight = (array, n = 1) => {
  let newArr = [];
  let arrayReverded = array.reverse();
  arrayReverded.forEach((e, index) => {
    if (index >= n) {
      newArr.unshift(e);
    }
  });

  return newArr;
  //   let newArr = [];
  // //   let arrayReverded = array.reverse();
  // array.forEach((e, index) => {
  //   if (index <= array.length - (n + 1)) {
  //     newArr.push(e);
  //   }
  // });

  // return newArr;
};

console.log(dropRight([1, 2, 3]));
// => [1, 2]
console.log(dropRight([1, 2, 3], 2));
// => [1]
console.log(dropRight([1, 2, 3], 5));
// => []
console.log(dropRight(["life", "is", "good", "fine"], 3));
console.log(dropRight([1, 2, 3], 0));
// => [1, 2, 3]

module.exports = dropRight;
