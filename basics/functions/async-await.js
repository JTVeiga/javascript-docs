// Async-await allow use of code that look synchronous to perform asynchronous tasks!

const add = (a, b) => {
  // add with timeout simulates a db query
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) reject("Numbers must be non-negative");
      resolve(a + b);
    }, 1000);
  });
};

// async returns the result as a Promise. (e.g., Promise { 'Henrique' })
const doWork = async () => {
  const sum = await add(1, 1); // await can receive only Promises!
  const sum2 = await add(sum, 1);
  const sum3 = await add(sum2, 1); // If any of the 'add' functions get rejected it goes to the catch function
  return sum3;
};

// 'then-catch' expression can be used since the function is now a Promise
doWork()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
