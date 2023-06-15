const birthdayEl = document.getElementById("birthday");
const btnEl = document.getElementById("btn");
const resultEl = document.getElementById("result");
btnEl.addEventListener("click", calculateAge);

function calculateAge(){
  const birthdayValue = birthdayEl.value;
  if (birthdayValue === ""){
    alert("Please enter a date of birth");
  }else {
    const presentYear = new Date().getFullYear();
    const birthdayYear = new Date(birthdayValue).getFullYear();
    const age = presentYear - birthdayYear;
    resultEl.innerHTML = `You are ${age} years old`;
  }
}

