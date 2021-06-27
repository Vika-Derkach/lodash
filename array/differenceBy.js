const differenceBy = (array, ...values) => {
  let newArr = [...array];

  return newArr;
};

console.log(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));
// => [1.2]
console.log(differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], "x"));
// => [{ 'x': 2 }]

module.exports = differenceBy;
