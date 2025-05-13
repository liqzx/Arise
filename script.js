let xp = 0;
let level = 1;

const xpText = document.getElementById("xp");
const levelText = document.getElementById("level");
const completeWorkout = document.getElementById("completeWorkout");

completeWorkout.addEventListener("click", () => {
  xp += 25;
  if (xp >= 100) {
    xp -= 100;
    level += 1;
    alert(`You leveled up! Now Level ${level}`);
    levelText.textContent = `Level: ${level}`;
  }
  xpText.textContent = `XP: ${xp} / 100`;
});
