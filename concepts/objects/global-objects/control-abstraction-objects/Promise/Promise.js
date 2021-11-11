// Promises is an enchancement for callback

// Function
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Yes"); // Either "resolve" or "reject" is run! Never both
  }, 2000);
  setTimeout(() => {
    reject("No"); // This reject world be displayed first, because it finalized first! (1s)
  }, 1000);
  setTimeout(() => {
    reject("Nooo!"); // Can also have multiple reject/resolve
  }, 500);
});

// Call function
myPromise
  .then((result) => {
    //if success
    console.log("Sucess!", result); // result is the data of resolve
  })
  .catch((error) => {
    //if fails
    console.log("Error!", error); // error is the data of reject
  });

// Promise function with additional parameters
const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

// Call
add(1, 2)
  .then((sum) => {
    console.log(sum);
  })
  .catch((err) => {
    console.log(err);
  });

// Call Chaining
add(1, 2)
  .then((sum) => {
    console.log(sum);

    add(sum, 5)
      .then((sum2) => {
        console.log(sum2); // Confusing code!
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });

/**
 * Promise chaining
 */

// Promise function with additional parameters
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

/**
 * MATH
 */

const calculateTip = (total, tipPercent = 0.25) => total + total * tipPercent;

const fahrenheitToCelsius = (temp) => {
  return (temp - 32) / 1.8;
};

const celsiusToFahrenheit = (temp) => {
  return temp * 1.8 + 32;
};

const add = (a, b) => {
  // add with timeout simulates a db query
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        reject("Numbers must be non-negative");
      }
      resolve(a + b);
    }, 1000);
  });
};

module.exports = {
  calculateTip,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  add,
};
const {
  calculateTip,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  add,
} = require("../src/math");

test("30% tip", () => {
  const total = calculateTip(10, 0.3);
  expect(total).toBe(13);
});

test("Default 25% tip", () => {
  const total = calculateTip(10);
  expect(total).toBe(12.5);
});

test("Fahrenheit to Celsius", () => {
  const total = fahrenheitToCelsius(32);
  expect(total).toBe(0);
});

test("Celsius to Fahrenheit", () => {
  const total = celsiusToFahrenheit(0);
  expect(total).toBe(32);
});

test("Add 2 numbers - Promise", (done) => {
  add(2, 3).then((sum) => {
    expect(sum).toBe(5);
    done();
  });
});

test("Add 2 numbers - async-await", async (done) => {
  const sum = await add(10, 22);
  expect(sum).toBe(32);
});
