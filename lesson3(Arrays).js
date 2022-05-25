/*const arr = new Array(10).fill(0);
arr.length = 5; //we can change array length with this and rest members became inaccessible
arr.length = 10; //although we changed again but remaining elements are gone!
console.log(arr);

const arr1 = [1,2,3,4,3]
console.log(arr1.includes(3)); //checks element is present or not
console.log(arr1.indexOf(3)); //returns the index of the element from left to right
console.log(arr1.lastIndexOf(3)); //returns the index of the element from right to left

arr1.push(5,6,7); //adds elements at the end of the array.
arr1.unshift(5,6,7); //adds elements at the beginning  of the array. its O(n) shifts rest elements
console.log(arr1.pop()); //removes element at the end.
console.log(arr1.shift()); //removes element in the beginning.
console.log(arr1);

//Array splice
arr1.splice(0, 3, 'a', 'b'); //deletes or replaces 3 elements for index 0 || two are replaced third is deleted 
arr1.splice(2, 0, 'c', 'd'); //used to add elements at some index here 2 and delete none 
console.log(arr1);

//Array slice
const newArr1 = arr1.slice(0, arr1.length / 2); //new array gets elements from 0-mid.
const newArr2 = arr1.slice(arr1.length / 2 ); //new array gets elements from mid-end.
console.log(newArr1);
console.log(newArr2);
console.log(newArr2.concat(['hello','world']));
console.log(newArr1.reverse()); //reverses the elements of an array
console.log(arr1); // original array remains same unlike 

//create string from Array elements

console.log(newArr1.join(''));




//check array
console.log(arr instanceof Array);
console.log(Array.isArray(arr));


*/

// Array of arrays!!
const temp = new Array(5).fill(0).map(() => [1, 2, 3]);
for (const val of temp) console.log(val);

/*
//looping through array
const tempArr = [1,2,3,4];

//for-of loop
for( const value of tempArr){
    console.log(value);
}

//for-each loop
tempArr.forEach(function(value,index){
    console.log(value, index, this); // we can access the object using 'this' operator
}, {num : 10 , group : 'abc'});

//map
const mappedArray = tempArr.map(function(value,index){
    return value + index + this.num;
}, { num : 5});

console.log(mappedArray);
console.log(tempArr); // original array is not effected 

// filter array
const filteredArray = tempArr.filter(function(value,index){
    return value < this.num || value === 4; //takes those elements to new array that satisfy condition
}, { num : 3});

console.log(filteredArray);
console.log(tempArr);

// find value or index
const foundvalue = tempArr.find(function(value,index){
    return value > this.num; //returns the first element  that satisfy condition
}, { num : 2});

console.log(foundvalue);

const foundIndex = tempArr.findIndex(function(value,index){
    return value > this.num; //returns the index of first element  that satisfy condition
}, { num : 2});

console.log(foundIndex);

//every: it can be used the same way | it returns true if all  passes are ture
//some:it can be used the same way | it returns true if some passes  are ture

//Sum the elements of Array(reduce and reduceRight)
const sum = tempArr.reduce(function(accumulator,currvalue){
    return accumulator + currvalue;
},0) // we initilize accumulator with 0; if we dont then it initilizes with first element of array;
console.log(tempArr);
console.log(sum);

//reduceRight does the same but starts from right;
*/

//sorting Arrays

const sortArr = [5, 3, 6, 3, 7, 0, 1, 3];
sortArr.sort(compareNumbers);
function compareNumbers(a, b) {
  if (a === 3) {
    return -1; //brings all 3's to the front
  }
  if (b === 3) {
    return 1;
  }
  return a - b; //increasing order
  //return b - a; //decreasing order
  //return 0; //original order
}
console.log(sortArr);
const t = new Array();
console.log(t[2]);
