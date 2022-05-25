//create objects using function
// this has two main draw back:
//1. we have to write the increment function with every user.
// 2. we can't add features to our user dynamically we have to do it one by one.
/*function userCreator(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = () => {
    return newUser.score++;
  };
  return newUser;
}
const user1 = userCreator('saaqib', 1);
const user2 = userCreator('shah', 2);
user1.increment();
user2.increment();
console.log(user1);
console.log(user2);
*/

/*
//prtototype chain using object.create:

function userCreator(name, score) {
  const newUser = Object.create(storedFunctions);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}
const storedFunctions = {
  increment: function () {
    this.score++;
  },
  login: function () {
    console.log(`${this.name} logged in`);
  },
};
const user1 = userCreator('saaqib', 1);
const user2 = userCreator('shah', 2);
user1.increment(); // every object has a hiddin propery __proto__ which has a link to storedFuction as created.
user2.increment();
console.log(user1);
console.log(user2);
user1.login();
console.log(user1.hasOwnProperty('score')); // also __proto__ of every object has default link to
// object.prototype where the function like .hasOwnProperty are stored.
// Here we have the link of __proto__ of user linked to storedfuctions.but the _proto__ of storedFuctions
// is still pointing to the object.prototype and it can access everything from there.
*/

//using this keyword inside a function.
/*
function userCreator(name, score) {
  const newUser = Object.create(storedFunctions);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}
const storedFunctions = {
  /* increment: function () { // if we create increment as arrow function it will take this from global 
    const add1 = function () { // and whole this will me messed. it will not increment.
      this.score++;
    };
    //add1();  we can't do it like this because it tries to find score in global
    add1.call(this); // here we pass the this keyword which constains user1 and it increments the score.
  
  // we can do the same using arrow function,where this assignment is lexically scoped
  increment: function () {
    const add1 = () => {
      this.score++;
    };
    add1(); //here no need to pass this. it gets the this from where it is stored i,e increment. 
  },
};
const user1 = userCreator('saaqib', 1);
const user2 = userCreator('shah', 2);
user2.increment();
console.log(user1);
console.log(user2);
*/

// functions are both Objects and Functions:
/*
function multiplyBy2(num) {
  return num * 2;
}
multiplyBy2.stored = 5;
console.log(multiplyBy2(3)); // return 6 works as a function

console.log(multiplyBy2.stored); // returns 5 works as an object.
console.log(multiplyBy2.prototype); // All the functions have the default property 'prototype'
                                    // on their object version which is a empty object.
*/
/*
//How 'new' automates the whole work
function userCreator(name, score) {
  this.name = name;
  this.score = score;
}
userCreator.prototype.increment = function () {
  this.score++;
};
userCreator.prototype.login = function () {
  console.log('logged in');
};

const user1 = new userCreator('saara', '1');
user1.increment();
console.log(user1);
user1.login();
*/

//class
//this how thing of function + object combo can be put together under class
//class works same under the hood where object is created using function as constructor
// and the functions are put inside the object.prototype.
class userCreator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  increment() {
    this.score++;
  }
  login() {
    console.log('logged in');
  }
}
const user1 = new userCreator('saara', '1');
user1.increment();
console.log(user1);
user1.login();
