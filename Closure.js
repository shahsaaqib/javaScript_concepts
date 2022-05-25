//closure understanding

function createfun() {
  function multiply(num) {
    return num * 2;
  }
  return multiply;
}
const generatefunc = createfun();
//once we call the createfun, it returns the multiply function and the whole body of the multiply func
//gets stored in the generate func and it has no connection with the createfun() after that;
const result = generatefunc(3);
//now we call the generate func and it will runn same as that of the multiply as it includes the whole
//body of the multiply func;
console.log(result);

//example 2
/*
function outer() {
  let tempcounter = 0;
  let counter = 0;
  function increment() {
    //const abc = 'hello';
    return ++counter;
  }
  return increment;
}
const myfunc = outer();
console.log(myfunc()); //here again the myfunc will contain all the code of increment func which is returned by
// the outer func and it has no connection with outer now.
//so the counter variable is gone.
//But javascript copies the code along will all the environment variables as 'bagpack' present in the local memory of
// the function outer;
console.log(myfunc());
//console.log(counter); we can only access the counter with myfunc so it becomes a kind of private data;
//'Bagpack' only have the variables used in increment and not the tempcounter;
//** this backpack is known as "closed over environment variable "(C.O.V.E).
// it is also called the  "persistant lexical or statical scoped refrenced data"(P.L.S.R.D)
// so javascript is a lexically or statically  scoped language.i,e we bring the data along with
//the function code where it was born.
//In industry terms it is known as closure where we put function along with the data.
//So the bagpack or closure of live data is attached to increment(then to myfunc) through a hidden
//property known as [[scope]] which persists when the inner function is returned out.

const anotherfunc = outer(); // it creates a brand new backpack i,e the counter variable.
console.log(anotherfunc()); // returns counter + 1 = 1
console.log(anotherfunc()); // returns 2
*/

//closure with functions
const multiply = (a, b) => a * b;
function prefilFunc(fn, preValue) {
  const inner = (liveVal) => {
    const output = fn(liveVal, preValue);
    return output;
  };
  return inner;
}
const multiplyBy2 = prefilFunc(multiply, 2);
console.log(multiplyBy2(7));
const multiplyBy3 = prefilFunc(multiply, 3);
console.log(multiplyBy3(7));
