const head = (array) => {
  let kaput;

  array.forEach((e, index) => {
    if (index === 0) {
      kaput = e;
    }
  });
  return kaput;
};

console.log(head([1, 2, 3]));
// => 1

console.log(head([]));
// => undefined
module.exports = head;
