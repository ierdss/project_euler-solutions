// Date: 4/1/2025
// Difficult: Easy
// Time Limit: 15 minutes
// Time Start: 11:06 AM
// Time Expected End: 11:21 AM
// Time Actual End: 11:10 AM
// Total Time Duration: 4 minutes

// Problem 1
// If we list all the natural numbers below **10** that are multiples of **3** or **5**, we get **3**, **5**, **6**, and **9**. The sum of these multiples is **23**.
// Find the sum of all the multiples of **3** or **5** below **1000**.

// All natural numbers below 10
// let sum = 0;
// for (let i = 1; i < 10; i++) {
//   if (i % 3 == 0 || i % 5 == 0) {
//     sum += i;
//   }
// }

// All natural numbers below 1000
let sum = 0;
for (let i = 1; i < 1000; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    sum += i;
  }
}

console.log(sum);
