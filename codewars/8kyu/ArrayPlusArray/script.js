// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. 
// I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.

// assert.strictEqual(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
// assert.strictEqual(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
// assert.strictEqual(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
// assert.strictEqual(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);

const tests = [
  [[1, 2, 3], [4, 5, 6], 21],
  [[-1, -2, -3], [-4, -5, -6], -21],
  [[0, 0, 0], [4, 5, 6], 15],
  [[100, 200, 300], [400, 500, 600], 2100],
]

function arrayPlusArray(arr1, arr2) {
  let sum = 0
  
  for (let i = 0; i < arr1.length; i++){
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
  return sum
}
  

// tests.forEach((test) => console.log(`tests:`,test[0]) )

tests.forEach((test) => console.log(`is: ${arrayPlusArray(test[0], test[1])}, should be: ${test[2]}}`))

