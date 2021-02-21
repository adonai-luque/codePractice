function palindrome(word) {
  return (word === word.split('').reverse().join(''));
}

console.log(palindrome("code"));
console.log(palindrome("aab"));
console.log(palindrome("carerac"));
