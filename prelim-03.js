// Problem 3
// You are given a function called filterPositiveNumbers that is supposed to return an array containing only positive numbers from a given array. 
// However, the program contains bugs that cause it to produce incorrect results.
// Your task is to find and fix the bugs so that it properly returns the correct message.

function filterPositiveNumbers(numbers) {
    let positiveNumbers = [];
    
    for (let i = 0; i <= numbers.length; i++) {
        if (numbers[i] > 0) {
            positiveNumbers.push(numbers[i]);
        }
    }
    
    return positiveNumbers;
}

// Test cases
console.log(filterPositiveNumbers([3, -1, 7, 0, -5, 10])); // Expected: [3, 7, 10]
console.log(filterPositiveNumbers([-2, -8, -1]));          // Expected: []
console.log(filterPositiveNumbers([5, 15, 25]));           // Expected: [5, 15, 25]
console.log(filterPositiveNumbers([]));                    // Expected: []