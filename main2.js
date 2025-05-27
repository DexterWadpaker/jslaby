function calculate(num1, num2, operation) {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num2 !== 0 ? num1 / num2 : 'Ошибка: деление на ноль';
    default:
      return 'Неверная операция';
  }
}

// Считываем данные от пользователя
const input1 = parseFloat(prompt("Введите первое число:"));
const input2 = parseFloat(prompt("Введите второе число:"));
const operation = prompt("Введите операцию (+, -, *, /):");

// Вызываем функцию и выводим результат
const result = calculate(input1, input2, operation);
console.log("Результат:", result);
