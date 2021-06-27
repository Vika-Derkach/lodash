const find = (array, callback) => {
  let firstTrue;
  array.forEach((e) => {
    if (callback(e) && !firstTrue) {
      firstTrue = e;
    }
  });
  return firstTrue;
};
const array = [1, -2, 3, -4]; // инициализируем переменную, содержащую массив числовых значений

// аналогично с использованием стрелочной функции
console.log(find(array, (currentValue) => currentValue < 0));
// возвращаемое значение -2
console.log(find(array, (currentValue) => currentValue > 0)); // возвращаемое значение 1

module.exports = find;
