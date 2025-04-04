// const num = 600851475143;
const num = 24;

console.log(getLargestPrimeFactor(num));

function getLargestPrimeFactor(num) {
  if (num == 1 || num == 0) return 1;
  if (num % 2 == 0) {
    if (num == 2) return num;
    return getLargestPrimeFactor(num / 2);
  } else if (num % 3 == 0) {
    if (num == 3) return num;
    return getLargestPrimeFactor(num / 3);
  } else if (num % 5 == 0) {
    if (num == 5) return num;
    return getLargestPrimeFactor(num / 5);
  } else if (num % 7 == 0) {
    if (num == 7) return num;
    return getLargestPrimeFactor(num / 7);
  } else {
    return num;
  }
}
