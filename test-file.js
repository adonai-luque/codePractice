let names = ["Juan", "Pedro", "Lucho", "Juan", "Maria", "Pedro"];
console.log(names.length);
namesMap = {};
uniqNames = names.filter((name) =>
  namesMap[name] ? false : (namesMap[name] = true)
);
console.log(uniqNames.sort((a, b) => (a > b ? -1 : 1)));
