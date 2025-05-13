let xp = 0;
const xpDisplay = document.getElementById("xp");

function gainXP(amount) {
  xp += amount;
  xpDisplay.textContent = xp;
}

document.addEventListener("DOMContentLoaded", () => {
  gainXP(10);
});
