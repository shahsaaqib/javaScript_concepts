// working of iterators under hood
function createflow(array) {
  let i = 0;
  const inner = {
    next: function () {
      const element = array[i];
      i++;
      return element;
    },
  };
  return inner;
}
const returnNextElement = createflow([1, 2, 3, 4]);
console.log(returnNextElement.next());
console.log(returnNextElement.next());
console.log(returnNextElement.next());
console.log(returnNextElement.next());

//here actually we want the data to come to us.not like for loop where we go and search for a element
// grab it and display it.
// The way of doing this in more efficient way is the generators or generator function.

//generator

function* flow() {
  // * is used for generator
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}
const generateNextElement = flow(); //here it returns the generator object with next property
//  and when we call the next it yiels or returns value.
console.log(generateNextElement.next()); //here it begins the execution context of the *flow().
console.log(generateNextElement.next()); // every time we call next we go back into the *flow() execution context
console.log(generateNextElement.next());
console.log(generateNextElement.next());
console.log(generateNextElement.next());

//generator to get the value we want

function* dynamicFlow() {
  const num = 10;
  let newNum = yield num;
  yield 5 + newNum;
  newNum = yield 6;
  yield 6 + newNum;
  yield 7;
}
const getNext = dynamicFlow();
console.log(getNext.next()); // the first yield executes and returns 10;
console.log(getNext.next(2)); // yield is so powerful that next time it assigns the value what we pass in
// so here it takes 2 and assigns it to newNum and next yiels returns 5 + 2 = 7
console.log(getNext.next()); // next yield we return 6 but exection context continues
console.log(getNext.next(6)); // 6 is assigned to newNum and next yield will return 12
console.log(getNext.next()); //last yield executes and returns 7.
// it has a done property which is true until the last yield executes and when finished it becomes true.
// the next function has in its backpack or closure the data along with the generator location
// so that when it comes back it runs from the saved location.
//after every call to dynamicFlow or after every yield the function gets suspended or paused and next time
// we call the next it begins execution from where it was suspended.

//
