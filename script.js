let budget;
budget = Number(prompt("Enter yor budget: "));

function decreaseHalf() {
  for (let i = budget; i >= 0; i--) {
    if (i === parseInt(budget / 2)) {
      document.getElementById("spent").innerHTML = `Sei a metà del budget, hai ora ${parseInt(budget / 2)} €`;
    }
  }
}
function decreaseMore() {
  for (let i = budget; i >= 0; i--) {
    if (i === parseInt(budget / 10)) {
      document.getElementById("spent2").innerHTML = `Stai per finire i soldi, hai ancora ${parseInt(budget / 10)} €`;
    }
  }
}
function decreaseLast() {
  for (let i = budget; i >= 0; i--) {
    if (i === 0) {
      document.getElementById("spent3").innerHTML = "Stai n'guaiato frà";
    }
  }
}
