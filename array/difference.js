const difference = (array, ...values) => {
  let newArr = [...array];
  values.forEach((e) => {
    newArr.forEach((el) => {
      if (e.includes(el)) {
        const indexElem = newArr.findIndex((idx) => idx === el);

        if (indexElem > -1) {
          newArr = [
            ...newArr.slice(0, indexElem),
            ...newArr.slice(indexElem + 1),
          ];
        }
      }
    });
  });
  return newArr;
};

console.log(difference([2, 1, 3, 4, 5], [2, 3], [4, 5]));
// => [1]

module.exports = difference;
