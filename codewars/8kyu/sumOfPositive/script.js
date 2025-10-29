// Task
// You get an array of numbers, return the sum of all of the positives ones.
// Example
// [1, -4, 7, 12] => 
// 1+7+12=20
// Note
// If there is nothing to sum, the sum is default to 0. done
//assert.strictEqual(positiveSum([1,2,3,4,5]),15);
//assert.strictEqual(positiveSum([1,-2,3,4,5]),13);
//assert.strictEqual(positiveSum([]),0);
//assert.strictEqual(positiveSum([-1,-2,-3,-4,-5]),0);
//assert.strictEqual(positiveSum([-1,2,3,4,-5]),9);

const test = [
    [[1, 2, 3, 4, 5], 15],
    [[1, -2, 3, 4, 5], 13],
    [[], 0],
    [[-1, -2, -3, -4, -5], 0],
    [[-1, 2, 3, 4, -5], 9]
]

function positiveSum(arr) {
    if (!arr.length) {
        return 0;
    }
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i]
        }
    }
    return sum
}

test.forEach((test) => console.log(`is: ${positiveSum(test[0])}, should be: ${test[1]}`))