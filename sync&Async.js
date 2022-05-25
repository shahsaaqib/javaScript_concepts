function printhello() {
  console.log('Hello world');
}
setTimeout(printhello, 1000);
console.log('me first');

function print() {
  console.log('blocking');
}
function blockFor1Sec() {
  for (let i = 0; i < 1000000000; i++);
}
setTimeout(print, 0); // 0ms here means the time after which print function is moved to the callback queue
blockFor1Sec();
console.log('me after blocking');

// when we timeout something it moves to the browser and is stored in the callback queue.
// it only moves to the callback stack once over regular code is finished even if the timer
//is complete or even we have 100000 of console logs.it will be always executed in the end.
//this feature of javascirpt is known as event loop it contineously check the call stack and
// sees whether it is empty or not and once whole global is done it then see the callback queue
// and moves it to the stack to execute it.
