// Memoized functions store the function itself an a cache object

function memoize(fn) {
  const cache = {};
  // ...args means it doesn't know what args will come, just take all of them as pass as an array
  return function (...args) {
    console.log(args); // args in this case is [2, 5]

    // If the result is already cached, show the cached result
    if (cache[args]) return cache[args];

    // If there is no cache. calls the fn with the new arguments
    const result = fn.apply(this, args);

    // Saves the result to the cache
    cache[args] = result;
    console.log(cache); // Cache here is { '2, 5': 7 }

    // Return the calculated value
    return result;
  };
}
function sum(a, b) {
  return a + b;
}

console.log(memoize(sum)(2, 5));
