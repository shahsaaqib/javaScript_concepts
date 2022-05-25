//numbers
/*let num = 20;
let strNum = '10.8px';
console.log(num);
console.log(parseInt(strNum) + num);
console.log('20' == num);
console.log('20' === num);
console.log(Math.pow(8,4));
console.log('20' * num);
console.log('a' * num);
console.log(BigInt(100));
console.log(typeof(100n));
console.log(typeof(strNum));*/

//String
/*let str = 'zbcd';
console.log(str + 'efgh');
console.log(str > 'zfgh');
console.log('print a single quote: \'');
console.log('hello\nworld');
console.log('Result : ${10 + 20}');
console.log(`Result : ${10 + 20}`);
console.log(`Result : ${10 + str}`);
console.log(str[1] + str[0]);
console.log(str.charAt(1));
console.log(str.includes('bz'));
console.log(str.includes('bcd'));
console.log(str.startsWith('a'));
console.log(str.endsWith('d'));
console.log(str.substring(1,3));
console.log(str.slice(1,2));
console.log(str.padStart(3,'-'));
console.log(str.padStart(10,'-'));
console.log(str.padEnd(10,'-'));
let str1 = '     a,b,c,d     '
console.log(str1.trim());
console.log(str1.trimStart());
console.log(str1.trimEnd());
console.log(str1.split(','));
console.log(str1.split('e'));*/

//Objects
/*const person = {
    name : 'saaqib',
    level : 'beginner',
}
console.log(person);
console.log(JSON.stringify(person));
console.log( typeof JSON.stringify(person));
console.log(JSON.parse(JSON.stringify(person)));
console.log(typeof JSON.parse(JSON.stringify(person)));
person.level = 'intermediate';
console.log(person.level);*/
 
//Maps
/*const map = new Map();
map.set(12,'hello');
map.set(3,'world');
map.set(22,'saaqib');
console.log(map.get(22));
console.log(map.get(123));
console.log(map.size);
console.log(map.has(12));
console.log(map.has('hello'));

//Sets
const set = new Set();
set.add('hello');
set.add('hello');
set.add('world');
console.log(set);
console.log(set.has('hello'));
console.log(set.has('hello world'));
console.log(set.size);
set.delete('hello');
console.log(set);*/

//Arrays
/*const arr = [1,2,3,4];
arr.push(5);
console.log(arr);
const x1 = arr.slice(0,3);
const x2 = arr.slice(3);
console.log(x1);
console.log(x2);
arr.shift();
console.log(arr);
arr.shift();
console.log(arr);
console.log(arr.includes(3));
console.log(typeof arr);
arr.pop();
console.log(arr);*/

//Functions

/*function add(num = 6){
    return num + 3;
}
function multiply(num = 1){
    return num * 4;
}
console.log(add(2));
console.log(add());

//passing function as argument
function passfunc(func,param){
    console.log(func(param));  
}
passfunc(add,10);
passfunc(multiply,12);
passfunc(multiply);

//functions are objects
console.log(typeof add);
console.log(add instanceof Object);*/

//looping
/*
for(const val of [1,2,3]){
    console.log(`${val}`);
}
for(const val of 'abcd'){
    console.log(val);
}

//object looping
const person = {
    name : 'saaqib',
    level : 'beginner',
}
for(const key in person){
    console.log(`${key} : ${person[key]}`);
}

//for each
[1,2,3].forEach(function(value){
    console.log(value);
})*/
//console.error('error');
//console.table([[1,2],['hello','world']]);

//count
/*console.count();
console.count();
console.count('key');
console.count('key');
console.countReset();
console.count();*/

//time
/*
console.time('key');
console.time()
for(let i = 0 ; i < 100000000; i++) {}
console.timeEnd();
console.timeLog('key');
for(let i = 0 ; i < 100000000; i++) {}
console.timeEnd('key');*/

//use strict
function foo(){
    'use strict';
    let x = 5; //without let (error)
}
y = 10; //let not used(no error)
foo();
