const chunk = (array, size = 1) => {
  let newArr = [[]];
  array.forEach((e) => {
    const lastElement = newArr[newArr.length - 1];
    if (lastElement.length >= size) {
      newArr.push([e]);
    } else {
      lastElement.push(e);
    }
  });
  return newArr;
};

console.log(chunk(["a", "b", "c", "d"], 2));
// => [['a','b'],['c','d]]
console.log(chunk(["a", "b", "c", "d"], 3));
// => [['a', 'b', 'c'], ['d']]

module.exports = chunk;
