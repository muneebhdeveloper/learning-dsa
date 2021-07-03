const { isEmpty } = require("lodash");

let data = [-2, -3, -1, -5, 5, 1, 2, 3, 4];
let dataOne = [1, 2, 3];

function sumZero(array) {
  let postiveReversed = array.filter((num) => num > 0).reverse();
  let negativeSorted = array.filter((num) => num < 0);

  if (isEmpty(postiveReversed) || isEmpty(negativeSorted)) {
    return false;
  }

  let sumZeroSets = [];

  for (let i = 0; i < postiveReversed.length; i++) {
    for (let j = 0; j < negativeSorted.length; j++) {
      if (postiveReversed[i] + negativeSorted[j] === 0) {
        sumZeroSets.push([postiveReversed[i], negativeSorted[j]]);
      }
    }
  }

  return sumZeroSets;
}

console.log(sumZero(data));
