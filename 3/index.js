// Date: 5/3/2025
// Difficult: Easy
// Time Limit: 15 minutes
// Time Start: 7:07 AM
// Time Expected End: 4:55 AM
// Time Actual End:
// Total Time Duration:  minutes
// Link: https://projecteuler.net/problem=2

// const num = 600851475143;
const num = 24;

console.log(getLargestPrimeFactor(num));

// Functions
function getLargestPrimeFactor(num) {
  let largest = 0;
  if (num % 2 === 0) {
    getLargestPrimeFactor(num / 2);
  } else if (num % 3 === 0) {
    getLargestPrimeFactor(num / 3);
  } else if (num % 5 === 0) {
    
  }
  if (num > largest) {
    largest = num;
  }
  return largest;
}
