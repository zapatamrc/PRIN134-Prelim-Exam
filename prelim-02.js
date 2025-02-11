// Problem 2
// You are given a function called checkVotingEligibility that determines whether a person is eligible to vote based on their age and citizenship.
// However, the program is not working correctly. 
// Your task is to find and fix the bugs so that it properly returns the correct message.

function checkVotingEligibility(age, isCitizen) {
    if (age >= 18 && isCitizen == true) {
        return `You are eligible to vote.`;
    } else if (age < 18) {
        return `You are not old enough to vote.`;
    } else {
        return `You must be a citizen to vote.`;
    }
}

// Test cases
console.log(checkVotingEligibility(20, true));  // Expected: "You are eligible to vote."
console.log(checkVotingEligibility(16, true));  // Expected: "You are not old enough to vote."
console.log(checkVotingEligibility(25, false)); // Expected: "You must be a citizen to vote."
console.log(checkVotingEligibility(18, true));  // Expected: "You are eligible to vote."
console.log(checkVotingEligibility(18, false)); // Expected: "You must be a citizen to vote."