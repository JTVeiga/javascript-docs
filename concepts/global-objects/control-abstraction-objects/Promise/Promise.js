// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise is in one of these states:
//     pending: initial state, neither fulfilled nor rejected.
//     fulfilled: meaning that the operation was completed successfully.
//     rejected: meaning that the operation failed.

const myPromise = new Promise((resolve, reject) => {
  // Either "resolve" or "reject" is run! Never both

  setTimeout(() => {
    resolve("Resolved!");
  }, 2000);

  setTimeout(() => {
    reject("Rejected"); // Finalized first, therefore the function will be rejected
  }, 1000);

  setTimeout(() => {
    reject("Nooo!"); // Can have multiple reject/resolve. But only the first will be invoked
  }, 500);
});
