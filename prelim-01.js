// Problem 1
// You are given a function called greetUser that is supposed to return a greeting message using template literals instead of string concatenation. 
// However, the program contains some bugs that prevent it from working correctly.
// Your task is to find and fix the bugs so that it properly returns the expected greeting message.

function greetUser(name, age) {
    return `Hello, ${name}! You are ${age} years old.`;
}

// Test cases
console.log(greetUser("Alice", 25));  // Expected: "Hello, Alice! You are 25 years old."
console.log(greetUser("Bob", 30));    // Expected: "Hello, Bob! You are 30 years old."
console.log(greetUser("", 18));       // Expected: "Hello, ! You are 18 years old."