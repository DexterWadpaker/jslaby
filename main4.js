let userName = prompt("Введите ваше имя:", "");
let ageInput = prompt("Введите ваш возраст:", "");

while (!userName || isNaN(Number(ageInput))) {
  userName = prompt("Пожалуйста, введите корректное имя:", userName || "");
  ageInput = prompt("Пожалуйста, введите корректный возраст:", ageInput || "");
}

const age = Number(ageInput);

if (age < 18) {
  alert("You are not allowed to visit this website");
} else if (age >= 18 && age <= 22) {
  const isSure = confirm("Are you sure you want to continue?");
  if (isSure) {
    alert(`Welcome, ${userName}`);
  } else {
    alert("You are not allowed to visit this website");
  }
} else {
  alert(`Welcome, ${userName}`);
}
