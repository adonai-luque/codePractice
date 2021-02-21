function isLongPressedName(name, typed) {
  let value = true;
  const subSets = (str) => {
    store = []
    str.split('').forEach((c) =>  {
      if (store[0] && (store[0].indexOf(c)>=0)) {
        store[0] += c;
      } else {
        store.unshift(c)
      }
    })
    return store
  }
  let nameSubSets = subSets(name);
  let typedSubSets = subSets(typed);
  if (typedSubSets.length === nameSubSets.length) {
    nameSubSets.forEach((s, index) => { if (typedSubSets[index].indexOf(s)<0) value = false });
  } else {
    value = false;
  }
  return value;
};
console.log(isLongPressedName("alex", "aaleex"));
console.log(isLongPressedName("saeed", "ssaaedd"));
console.log(isLongPressedName("leelee", "lleeelee"));
console.log(isLongPressedName("laiden", "laiden"));
