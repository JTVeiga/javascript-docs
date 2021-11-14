const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "foo")
);
const promises = [promise1, promise2];

// Wait until all promises have settled (each may resolve or reject).
Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result.status))
);

// expected output:
// "fulfilled"
// "rejected"
