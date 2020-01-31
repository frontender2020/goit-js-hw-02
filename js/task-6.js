let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Введите число");
  if (input === null) {
    break;
  }
  input = Number(input);

  const isNaNumber = Number.isNaN(input);
  if (isNaNumber) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }

  numbers.push(input);
}

for (const number of numbers) {
  total += number;
}

numbers.length;

console.log(`Общая сумма чисел равна ${total}`);
