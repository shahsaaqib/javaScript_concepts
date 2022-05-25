//example 1
/*
var a = 20;
{
  let a = 30;
  console.log(a); // returns 30
}
function x() {
  var a = 7;
  function y() {
    console.log(a++);
  }
  a = 100;
  return y;
}
var z = x();
z(); //returns 100
z(); //returns 101
console.log(a); //returns 20

*/
//example 2
/*
function z() {
  var b = 9000;
  function x() {
    var a = 66;
    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}
z(); // return 66, 9000
*/
//example 3
/*
function x() {
  for (var i = 1; i <= 7; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log('hello from js');
}
x(); // here var is global decleration so untill timeout happens its value becomes 8 so it
//   prints 8 8 times;
*/

//example 4

function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log('hello from js');
}
x(); //here due to let i is not accesible globally so it returns 1,2,3,4,5,

//example 5
/*
function x() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    close(i); //new copy of i on every call
  }
  console.log('hello from js');
}
x();
*/
// example 6
/*
function outer() {
  var a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}
outer()(); // returns 10
//same call
var close = outer();
close(); // returns 10
*/
// Example 7
/*
function outest() {
  var c = 20;
  function outer(b) {
    var a = 10;
    function inner() {
      console.log(a++, b, c++);
    }
    return inner;
  }
  return outer;
}
outest()('hello')(); // returns 10 hello 20
//same call
var close = outest();
close('hello')(); //returns 10 hello 20 
close('hello')(); //returns 10 hello 21 'a'  is not lexically scoped and is still local
const last = close('hello');
last(); // returns 10 hello 22
last(); // returns 11 hello 22 because for last a and c are both lexically scoped with the inner function
*/

//data privacy using closures
/*
function counter() {
  var count = 0;
  return function incrementCounter() {
    count++;
    console.log(count);
  };
}
var counter1 = counter();
counter1(); //returns 1
counter1(); //returns 2

var counter2 = counter();
counter2(); //returns 1
*/
/*
function Counter() {
  let count = 0;
  this.incrementCounter = function () {
    count++;
    console.log(count);
  };
  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
}

var counter1 = new Counter();
counter1.incrementCounter(); //1
counter1.incrementCounter(); //2
counter1.decrementCounter(); //1

var counter2 = new Counter();
counter2.incrementCounter(); //1
counter2.incrementCounter(); //2
counter2.decrementCounter(); //1
*/
//example
/*
function func() {
  let counter = 0;
  function inc() {
    counter++;
    console.log(counter);
  }
  return inc;
}

const myfun = func();
setTimeout(myfun, 100);
console.log('before timeout');
myfun();
*/
