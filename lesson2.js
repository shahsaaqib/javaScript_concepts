//variables and scoping:
console.log('varNum',varNum); //here varNum is hoisted to the top and initialized with undefined
//console.log('varNum',varNum); //it throws error as let in not initialized although hoiseted to top
var varNum = 0;
//let letNum = 0;

function test(){
    if(true){
        let letNum = 0;
        var varNum = 0;
        console.log('letNum',letNum);
    }
    console.log('varNum',varNum); // var can be accessed throughout the test() function
    //console.log('letNum',letNum); //letNum throughs error becoz its scope is within the if statement
}
test();

// const is also used and is different from let in one way that it  can be assigned only once!

const arr = [1,2,3];
//arr = [1,2,3,4];//can't be reassigned how ever we can add elements like
arr.push(4);
console.log(arr);