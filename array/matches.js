const matches = (elem1) => (elem2) => {
  let kaput;

  const elem1Key = Object.keys(elem1);

  elem1Key.forEach((e) => {
    if (elem1[e] === elem2[e]) {
      kaput = true;
    } else {
      kaput = false;
    }
  });
  return kaput;
};

console.log(matches({ a: 4, c: 5 })({ a: 4, b: 2, c: 6 }));
// => false
console.log(matches({ a: 4, c: 6 })({ a: 4, b: 2, c: 6 }));
// => true
module.exports = matches;
