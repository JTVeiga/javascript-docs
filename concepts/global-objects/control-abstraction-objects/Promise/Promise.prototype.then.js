const myPromise = new Promise((resolve, reject) => {
  resolve("Resolved!");
});

myPromise.then((result) => {
  console.log("Success!", result);
});

/**
 * Promise chaining
 */

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
};

add(1, 1)
  .then((sum) => {
    console.log(sum);
    return add(sum, 1);
  })
  .then((sum2) => {
    console.log(sum2);
    return add(sum2, 1);
  })
  .then((sum3) => {
    console.log(sum3);
  })
  .catch((err) => {
    console.log(err);
  });
