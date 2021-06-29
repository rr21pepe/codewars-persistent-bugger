const splitNumber = (number) =>
  (number)
    .toString()
    .split('')
    .map(n => parseInt(n))

const multiply = numbers =>
  numbers.reduce((prev, acc) => prev * acc)

const persistence = number => {
  let rounds = 0

  while (splitNumber(number).length > 1) {
    number = multiply(splitNumber(number))
    rounds += 1
  }

  return rounds
}

console.log(persistence(39), 3);
console.log(persistence(4), 0);
console.log(persistence(25), 2);
console.log(persistence(999), 4);
