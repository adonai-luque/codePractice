function backspaceCompare(S, T) {
  const decode = (text) => {
    store = []
    text.split('').forEach((c) => {
      if (c === "#") {
        store.shift();
      } else {
        store.unshift(c);
      }
    });
    return store.join('');
  }
  return (decode(S) === decode(T));
}

console.log(backspaceCompare("ab#c", "ad#c"));
console.log(backspaceCompare("ab##", "c#d#"));
console.log(backspaceCompare("a##c", "#a#c"));
console.log(backspaceCompare("a#c", "b"));