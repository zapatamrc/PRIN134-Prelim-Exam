// Problem 5
// You are given a function getDayMessage that should return a message based on the day of the week. 
// However, the function contains bugs that prevent it from working correctly.
// Your task is to find and fix the bugs so that the function correctly returns the expected messages.

function getDayMessage(day) {
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            message = "It's a weekday.";
            break;
        case "Saturday":
        case "Sunday":
            message = "It's the weekend!";
            break;
        default:
            message = "Invalid day.";
    }
    return message;
}

// Test cases
console.log(getDayMessage("Monday"));   // Expected: "It's a weekday."
console.log(getDayMessage("Sunday"));   // Expected: "It's the weekend!"
console.log(getDayMessage("Funday"));   // Expected: "Invalid day."
