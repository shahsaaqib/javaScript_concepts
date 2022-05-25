function higherorder(arr, instruction) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(instruction(arr[i]));
  }
  return result;
}
const output = higherorder([1, 2, 3, 4], (input) => input * 2);
console.log(output);

// use of from to make array
const constructArr = function () {
  const Arr = Array.from(arguments);
  Arr.push('saaqib');
  return Arr.join(' ');
};
console.log(constructArr('my', 'name', 'is'));
