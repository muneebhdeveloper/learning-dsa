// hello -> llheo

function isAnagram(stringOne, stringTwo) {
  if (stringOne.length !== stringTwo.length) {
    return false;
  }

  let strOneMap = {};

  for (let letter of stringOne) {
    if (strOneMap[`${letter}`] >= 1) {
      strOneMap[`${letter}`] += 1;
    } else {
      strOneMap[`${letter}`] = 1;
    }
  }

  for (let letter of stringTwo) {
    if (strOneMap[`${letter}`]) {
      strOneMap[`${letter}`] -= 1;
    } else {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("muneeb", "nuemeb"));
