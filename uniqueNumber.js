let findUnique = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 5, 6, 7, 7, 8, 8];

function countUnique(array) {
  let uniqueNum = {};

  for (number of array) {
    uniqueNum[`${number}`] = number;
  }

  return Object.values(uniqueNum).length;
}

console.log(countUnique(findUnique));
