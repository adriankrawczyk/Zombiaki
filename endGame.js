import { zombies } from "./handleZombies.js";
import { playMusic } from "./playMusic.js";
let gameEnded = false;
function endGame() {
  document.getElementById("popup").style.visibility = "visible";
  playMusic();
  gameEnded = true;
  zombies.length = 0;
}

export { endGame, gameEnded };
