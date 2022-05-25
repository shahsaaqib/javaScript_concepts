/*const reduce = function (array, howToCombine, buildingUp) {
  for (let i = 0; i < array.length; i++) {
    buildingUp = howToCombine(buildingUp, array[i]);
  }
  return buildingUp;
};
const add = (a, b) => {
  return a + b;
};
const sumArray = reduce([1, 2, 3, 4], add, 0);
const productArray = reduce([1, 2, 3, 4], (a, b) => a * b, 1);
console.log(sumArray);
console.log(productArray);
*/
/*
//doing this with .reduce

const sumArray = [1, 2, 3, 4].reduce((a, b) => a + b, 0);
const productArray = [1, 2, 3, 4].reduce((a, b) => a * b, 1);
console.log(sumArray);
console.log(productArray);

//filter
const numGreaterthan2 = [1, 2, 3, 4].filter((a) => a > 2);
console.log(numGreaterthan2);

const maxInArr = [1, 2, 3, 4].reduce((a, b) => {
  a = Math.max(a, b);
  return a;
});
console.log(maxInArr);

const minInArr = [1, 2, 3, 4].reduce((a, b) => {
  a = Math.min(a, b);
  return a;
});
console.log(minInArr);

const multiplyBy2 = [1, 2, 3, 4].map((a) => a * 2);
console.log(multiplyBy2);

//combining filter and reduce
const numGreaterthan2Sum = [1, 2, 3, 4]
  .filter((a) => a > 2)
  .reduce((a, b) => a + b, 0);
console.log(numGreaterthan2Sum);

//combing map and reduce
const multiplyBy2Sum = [1, 2, 3, 4]
  .map((a) => a * 2)
  .reduce((a, b) => a + b, 0);
console.log(multiplyBy2Sum);
*/

// Reduce working on array of functions.
const multiplyBy2 = (a) => a * 2;
const add3 = (a) => a + 3;
const divideBy5 = (a) => a / 5;

const reduce = function (array, howToCombine, buildingUp) {
  for (let i = 0; i < array.length; i++) {
    buildingUp = howToCombine(buildingUp, array[i]);
  }
  return buildingUp;
};

const runFunctionOnInput = (num, fun) => {
  return fun(num);
};
const output1 = reduce([multiplyBy2, add3, divideBy5], runFunctionOnInput, 11);
console.log(output1);

// doing the whole with .reduce
const output2 = [multiplyBy2, add3, divideBy5].reduce(runFunctionOnInput, 21);
console.log(output2);
