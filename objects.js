/*const key = 'myKey'
const website = {
    name : 'AlgoExpert',
    founder : ['saaqib','shah'],
    rating : 5,
    isAwasome : true,
    'multi line word' : 0,
    [key] : 1234
};
console.log(website.name);
console.log(website.myKey);
console.log(website['myKey']);
console.log(website["multi line word"]);
console.log(website.founder);

//changing , adding and deleting members of an object

website.name = 'FrontEndExpert'; // although website is const we can changes its members;
website.new = 'new member';
console.log(website.new);
delete website.new;
console.log(website.new);

//comparing objects
const obj = {};
console.log({} === {}); // returns false becoz they are different objects
console.log(obj === {}); //same 
console.log(obj === obj); // returns true as we compare same object
*/
/*
const name = 'saaqib';
const obj = {
    name,    // same as name : name
};
console.log(obj.name);

//Another way to create objects
const obj1 = new Object();
obj1.name = 'Ahmad';
console.log(obj1);

//using function to create objects

function Website(name, rating, founder){
    this.name = name;
    this.rating = rating;
    this.founder = founder;
}
const algoExpert = new Website('algoExpert',5,['saaqib']);
console.log(algoExpert);
*/
/*
//Symbol (unique identifier)

const id = Symbol('id');
const id1 = Symbol('id');

console.log(id === id1) //return false 

const id2 = Symbol.for('id');
const id3 = Symbol.for('id');
console.log(id2 === id3); //returns true becoz they are stored in global symbol registry
                          //so symbols with same value will return true.

const obj = {
    [id] : 1,
    [id1] : 0,
    id : 'hello',
    id : 'world' // id will be replaced by 'world'
};

//check if a member exists
console.log(obj);
console.log('id' in obj);
console.log(obj.hasOwnProperty('id'));
//the difference b/w the two is that in checks for the inherited members also while hasOwnproperty doesnot:
console.log(obj.hasOwnProperty('toString')) //returns false
console.log('toString' in obj); //return true becoz it inherits toSting

*/

//object functions, get, set
/*
const website = {
    name : 'AlgoExpert',
    founder : ['saaqib','shah'],
    rating : 5,
    sayHello : () => console.log('hello'),
    sayWorld(){
        console.log('world')
    },
    get getRating() {
        return this.rating;
    },
    set setRating(value){
        this.rating = value;
    }
};
website.sayHello();
website.sayWorld();
console.log(website.getRating);
website.setRating = 7;
console.log(website.getRating);
console.log(typeof website['getRating'],typeof website['sayHello']);

//inheriting an object
const obj = {
    foo1 : 'hello',
    foo2 : 'world',
    [Symbol('id')] : 0,
    __proto__:website // website inherited in obj
};
console.log(obj); //shows only own members not the inherited ones
console.log(obj.name); //accessing inherited members from website in obj

//iterating over a object
console.log(Object.keys(obj)); //skips the inherited and symbol properties
console.log(Object.values(obj)); //skips the inherited and symbol properties
console.log(Object.entries(obj)); //skips the inherited and symbol properties
Object.entries(obj).forEach(function(key,value){
    console.log(key,value);
});

//To iterate over the inherited members excluding the non-innumerable ones like toSting() we use for & in:
for (key in obj){
    console.log(key);
}

//copying a object

const myobj ={
    original : 'own property'
};
Object.assign(myobj , obj); //copys the propeties except inherited and non-innumerable ones;
console.log(myobj);

// freeze and seal a object
Object.freeze(obj); //now we can't change or add a member of obj
obj.foo1 = 'changed'; //does not work
obj.foo3 = 'add new'; //does not work
console.log(obj);
console.log(Object.isFrozen(obj)); //returns true when object is frozen

//seal
Object.seal(myobj); //now we can change but can't add a member to myobj
myobj.foo1 = 'changed'; // works
myobj.foo3 = 'add new'; //does not work
console.log(myobj);
console.log(Object.isSealed(myobj)); //returns true when object is sealed
*/

/*
//valueOf and toPrimitive
const website = {
    name : 'AlgoExpert',
    founder : ['saaqib','shah'],
    rating : 5,
    [Symbol.toPrimitive](hint){
        if( hint === 'number')
            return 5;
        else if( hint === 'string')
            return 'hello world'
        return 2; //d;efault
    }
};
console.log(website.valueOf());
website.valueOf = function() {
    return 'abc';
}
console.log(website + 1); // + is ambigious(string or number) so to primitive returned 2 
console.log(website - 1); // here it returned a number
console.log(website + 'abc') //returns 2abc; ambigious

*/
const website = [
  {
    name: 'AlgoExpert',
    founder: ['saaqib', 'shah'],
    present: true,
    rating: 5,
  },
  {
    name: 'AlgoExpert',
    founder: ['sara', 'shah'],
    present: false,
    rating: 5,
  },
  {
    name: 'AlgoExpert',
    founder: ['Ayesha', 'shah'],
    present: true,
    rating: 5,
  },
];
const present = website.filter(function (members) {
  return members.present;
});
for (const val of present) console.log(val);
const membersName = present.map((member) => {
  return member.founder;
});
for (const val of membersName) console.log(val);
