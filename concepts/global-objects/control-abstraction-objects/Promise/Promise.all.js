const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

// Wait for all promises to be resolved, or for any to be rejected.
Promise.all([promise1, promise2, promise3])
  // return only when all promises have been resolved
  .then((values) => {
    console.log(values);
  })
  // rejects immediately after any rejection
  .catch((values) => {
    console.log(values);
  });

// expected output: Array [3, 42, "foo"]
