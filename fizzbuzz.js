const fizzbuzz = (number, message, divisor) => {
  if (number % divisor) return "";
  return message;
};

for (let i = 1; i < 101; i++) {
  console.log((fizzbuzz(i, "fizz", 3) + fizzbuzz(i, "buzz", 5)) || i);
}
