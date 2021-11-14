const promise1 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "quick"));
// const promise3 = Promise.reject(0);

const promises = [promise1, promise2];

Promise.race(promises).then((value) => console.log(value));
// Both resolve, but promise2 is faster
// expected output: "quick"
// if there's a Promise.reject() first then the output will be rejected
