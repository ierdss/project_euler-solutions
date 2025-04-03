// const num = 600851475143;
const num = 24;

console.log(getLargestPrimeFactor(num));

function getLargestPrimeFactor(num) {
  let largest = 0;
  if (num % 2 === 0) {
    return getLargestPrimeFactor(num / 2);
  } else if (num % 3 === 0) {
    return getLargestPrimeFactor(num / 3);
  } else {
    if (num > largest) {
      largest = num;
    }
  }
  return largest;
}
