function doWhenDataRecieved(value) {
  returnNextElement.next(value); //Here the next() method takes us back to the execution context
  // of the creataFlow() and we execute from where it was paused.
  // so the value recieved from the fetch call will be assigned to the data in createflow(). (*5)
}
function* createFlow() {
  const data = yield fetch('https://twitter.com/tweets/saaqib'); // here the fetch command will return
  // a promise object which is not stord in the data but yielded out and soted in futureData where
  // next() was called. and data will remain unassigned. (*3)

  //when next is called again in doWhenDataRecieved it  assigns the value to the data which is
  //returned fom the fetch call. {*6}
  console.log(data); // then we console the data recived
}

const returnNextElement = createFlow(); // here the generator object is returned and stored in const.
//with a property of next (*1)
const futureData = returnNextElement.next(); // when we call the .next it triggers the execution
//context of the createFlow. and the returned promise will be stored here. (*2)
futureData.then(doWhenDataRecieved); // one the value property of the futureData which is a promise
// gets a value from the browser it triggers the onFulfilled function  doWhenDataRecieved with the input
// value recieved from fetch call.(*4)

// this is how with the help of generator we have created a way of async where we return back to the
// function and execute where we have left and asign values after they return from a web-Browser.
//this is how our async-await works in background.(pseudo-synchronisly asychronous)

//doing the stuff with async/await

async function creataFlow() {
  console.log('me first'); // first this executes (*1)
  const data = await fetch('https://twitter.com/tweets/saaqib'); //Here await works similar to
  //that of the yield and rest is handled by the async it is the callling of the .next() we did above;
  // once the value of promise object of fetch (which is not data) is recieved, we store it in data.
  console.log(data);
}

creataFlow(); // we call the createFlow
// when we see await it returns from the async createFlow() and then runs the global code
console.log('me second'); // (*2) then this executes
// and once we recieve the value from browser of the fetch call we then move back to the
// execution context of the createflow store the value in data and then console it.
