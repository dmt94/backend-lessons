// setTimeout(function timeout() {
//   console.log('pizza is here!!!🍕 🍕 🍕 ');
// }, 5000);

// setTimeout(function timeout() {
//   console.log('pizza is still coming');
// }, 2000);

// setTimeout(function timeout() {
//   console.log('pizza is almost here');
// }, 3000);

// setTimeout(function timeout() {
//   console.log('pizza is coming');
// }, 1000);

// we are passing an array and a callback function to this function asyncForEach
function asyncForEach(arr) {
  arr.forEach((i) => setTimeout(function () {
    console.log(i)}, 2000));
}

asyncForEach([1,2,3,4]);