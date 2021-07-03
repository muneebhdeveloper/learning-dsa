// [[18,20], [45, 2], [61, 12]]
// > 55, > 7

let dataToAnalyze = [
  [18, 20],
  [45, 2],
  [61, 12],
  [37, 6],
  [21, 21],
  [78, 9],
  [55, 21],
];

function openOrSenior(array) {
  return array.map(([age, handicap]) => {
    if (age >= 55 && handicap > 7) {
      return "Senior";
    } else {
      return "Open";
    }
  });
}

console.log(openOrSenior(dataToAnalyze));
