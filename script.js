function saveProgress() {
  console.log("Progress saved (placeholder).");


  let xpElement = document.getElementById("xp");
  let currentXP = parseInt(xpElement.textContent, 10);
  let newXP = currentXP + 20;


  if (newXP >= 100) {
    newXP -= 100;
    alert("Level Up!");

  }

  xpElement.textContent = newXP;
}
