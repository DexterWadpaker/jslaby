const userInput = prompt("Введите целое число:");
const limit = Number(userInput);

// Проверка, является ли число целым
if (Number.isInteger(limit) && limit >= 0) {
  let found = false;

  for (let i = 0; i <= limit; i++) {
    if (i % 5 === 0) {
      console.log(i);
      found = true;
    }
  }

  if (!found) {
    console.log("Sorry, no numbers");
  }
} else {
  console.log("Вы ввели некорректное число.");
}
