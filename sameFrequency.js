// same([1,2,3],[4,1,9])

function same(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }

  let mapArrayOne = {};

  for (let number of arrayOne) {
    if (mapArrayOne[`${number * number}`]) {
      mapArrayOne[`${number * number}`] += 1;
    } else {
      mapArrayOne[`${number * number}`] = 1;
    }
  }

  for (let number of arrayTwo) {
    if (mapArrayOne[`${number}`]) {
      mapArrayOne[`${number}`] -= 1;
    } else {
      return false;
    }
  }

  return true;
}

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));
console.log(same([3, 6, 2], [9, 4, 36]));
