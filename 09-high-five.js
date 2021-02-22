function highFive(grades) {
  let gradesById = {};
  grades.forEach((grade) => {
    gradesById[grade[0]] 
      ? gradesById[grade[0]].push(grade[1])
      : gradesById[grade[0]] = [grade[1]];
  })
  console.log(gradesById);
  ids = Object.keys(gradesById);
  return ids.map((id) => {
    let highFive = gradesById[id].sort((a, b) => b-a).slice(0, 5);
    let average = highFive.reduce((a, b) => a+b, 0)/5;
    return [parseInt(id), Math.floor(average)];
  })
}

grades = [[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]
console.log(highFive(grades))
