function fibonacci(n) {
  if (n === 0 || n === 1) return n;
  let last = 1;
  let penult = 0
  for (let i = 2; i < n+1 ; i++) {
    last = last + penult;
    penult = last - penult; //This is equivalent to updating 'penult' with the value of 'last' before the iteration
  }
  return last;
}

console.log(fibonacci(500));
