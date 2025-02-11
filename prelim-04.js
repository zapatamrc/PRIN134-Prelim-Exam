// Problem 4
// You are given a function called doubleEvenNumbers that is supposed to return a new array containing only the even numbers from the given array, and each even number should be doubled. 
// However, the function contains bugs that prevent it from working correctly.
// Your task is to find and fix the bugs so that it works as expected.

function doubleEvenNumbers(numbers) {
    let result = [];
    
    for (let i = 0; i <= numbers.length; i++) {
        if (numbers[i] % 2 === 0 ) {
            result.push(numbers[i]*2);
        }
    }
    
    return result;
}

// Test cases
console.log(doubleEvenNumbers([1, 2, 3, 4, 5, 6])); // Expected: [4, 8, 12]
console.log(doubleEvenNumbers([10, 15, 20, 25]));  	// Expected: [20, 40]
console.log(doubleEvenNumbers([1, 3, 5, 7]));      	// Expected: []
console.log(doubleEvenNumbers([]));                	// Expected: []