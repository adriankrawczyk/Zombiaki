import { zombies } from "./handleZombies.js";
let gameEnded = false;
function endGame() {
  document.getElementById("popup").style.visibility = "visible";
  gameEnded = true;
  zombies.length = 0;
}

export { endGame, gameEnded };
