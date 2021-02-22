function alphabetPosition(text) {
  let alphabetReducer = (reduced, c) => {
    if (/[A-Z]/.test(c)) {
      reduced.push(   (c.charCodeAt() - 64).toString()   );
    }
    return reduced;
  }
  return [...text.toUpperCase()].reduce(alphabetReducer, []).join(' ');
}
