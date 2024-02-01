const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let found = false;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 3 === 0) {
    found = true;
    break;
  }
}

if (found) {
  console.log("Да");
} else {
  console.log("Нет");
}