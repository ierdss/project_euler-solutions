// Date: 5/2/2025
// Difficult: Easy
// Time Limit: 15 minutes
// Time Start: 4:40 AM
// Time Expected End: 4:55 AM
// Time Actual End:
// Total Time Duration:  minutes
// Link: https://projecteuler.net/problem=2

let sum = 0;
let num1 = 1;
let num2 = 1;
let temp = 0;
let count = 4000000;

while (sum < count) {
  if (num1 % 2 == 0) {
    sum += num1;
    console.log(num1);
  }
  temp = num1;
  num1 = num1 + num2;
  num2 = temp;
}

console.log("\nThe sum of even valued numbers is: " + sum);
