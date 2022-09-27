let budget;
budget = 100;

function decrease() {
  for (let i = budget; i >= 0; i--) {
    if (i === 50) {
      document.getElementById("half-budget").innerHTML = "Sei a metà del budget";
    }
    if (i === 0) {
      document.getElementById("spent").innerHTML = "Hai finito il budget";
    }
  }
}
