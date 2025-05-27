function createNewUser() {
  const firstName = prompt("Введите имя:");
  const lastName = prompt("Введите фамилию:");

  const newUser = {
    firstName: firstName,
    lastName: lastName,
    getLogin() {
      return (this.firstName[0] + this.lastName).toLowerCase();
    }
  };

  return newUser;
}

// Создаем пользователя
const user = createNewUser();

// Вызываем метод и выводим результат
console.log(user.getLogin());
