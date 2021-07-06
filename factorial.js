import _ from "lodash";

// Factorial of 5
// 5 * 4 * 3 * 2 * 1

function factorial(number) {
  let factorialSum = 0;
  let tempNum = number;
  for (let i = 0; i < number - 1; i++) {
    if (!factorialSum) {
      factorialSum = number * (number - 1);
    } else {
      factorialSum = factorialSum * (tempNum - 1);
    }
    tempNum--;
  }

  return factorialSum;
}

function factorialLodash(number) {
  const numArray = _.range(1, number).reverse();
  const getFactorial = numArray.reduce(
    (accumulator, current) => accumulator * current,
    number
  );

  return getFactorial;
}

console.log(factorialLodash(5));
