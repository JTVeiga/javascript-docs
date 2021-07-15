// --- BUBBLE SORT O(n^2)
//   Look each pair of numbers inside the array (e.g. #1 & #2, #2 & #3, #3 & #4 ... )
//   Check if the left element is greater than the right element
//   If it's greater, elements are swapped
//   After 1st iteration, the last element of the array will be the largest
//   Repeat the process n-1 times (n = array length)

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  return arr;
}

function bubbleSort2(collection) {
  let { length } = collection; // Destructuring the collection object
  while (length > 1) {
    for (let i = 0; i < length - 1; i++) {
      if (collection[i] > collection[i + 1]) {
        const aux = collection[i + 1];
        collection[i + 1] = collection[i];
        collection[i] = aux;
      }
    }
    length--;
  }
  return collection;
}

// --- SELECTION SORT O(n^2)
//   Iterates over the whole array n times (n is the length of the array)
//   On each iteration pull the lowest value to the beginning of the array

function selectionSort(arr) {
  for (let i in arr) {
    // Assumes the first element is the lowest one
    let indexOfMin = i;

    // Assure that the indexOfMin correspond to the index of the lowest element
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) indexOfMin = j;
    }

    // Atribute the lowest element to the first position only if the first element is not already the indexofMIn
    if (indexOfMin !== i) {
      const aux = arr[i];
      arr[i] = arr[indexOfMin];
      arr[indexOfMin] = aux;
    }
  }
  return arr;
}

// --- MERGE SORT O(n*log(n)) - worst, average and best
//   array is divided into n subarrays, each containing 1 element (sorted array)
//   subarrays are then merged against each other

function mergeSort(arr) {
  if (arr.length === 1) return arr; // Base case

  // Slice the array in a half
  const middleIndex = Math.floor(arr.length / 2);
  const left = arr.slice(0, middleIndex);
  const right = arr.slice(middleIndex);

  // Merge two sorted arrays
  return mergedSorted(mergeSort(left), mergeSort(right));
}
function mergedSorted(left, right) {
  const mergedArr = []; // Array with the merged left and right

  // While there is left or right
  while (left.length && right.length) {
    if (left[0] < right[0]) mergedArr.push(left.shift());
    else mergedArr.push(right.shift());
  }

  // Return the result with remainder arrays (either left or right will have a remainder)
  return [...mergedArr, ...left, ...right];
}

// --- QUICK SORT - O(n*log(n)).
// we divide the list into halves every time, but we repeat the iteration N times(where N is the size of list).
// The running time consists of N loops (iterative or recursive) that are logarithmic, thus the algorithm is a combination of linear and logarithmic.

function swap(items, leftIndex, rightIndex) {
  const aux = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = aux;
}
function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)], //middle element
    i = left, //left pointer
    j = right; //right pointer
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j); //swapping two elements
      i++;
      j--;
    }
  }
  return i;
}
function quickSort(items, left, right) {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      quickSort(items, index, right);
    }
  }
  return items;
}

// ---

module.exports = { bubbleSort, selectionSort, mergeSort, mergedSorted };

console.log(bubbleSort([10, 3, 2, -1, 0]));
console.log(selectionSort([10, 3, 2, -1, 0]));
console.log(mergeSort([10, 3, 2, -1, 0]));
console.log(quickSort(items, 0, items.length - 1));
