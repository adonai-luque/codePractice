function isPerfectSquare(num) {
  let odd = 1
  let sum = 0
  while (sum < num) {
    sum += odd;
    odd += 2;
    if (sum === num) return true;
  }
  return false
}

console.log(isPerfectSquare(23548130116));

