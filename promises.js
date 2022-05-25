function display(data) {
  console.log(data);
}
const futureData = fetch('https://twitter/will/tweets/1');
futureData.then(display);
console.log('first me');
