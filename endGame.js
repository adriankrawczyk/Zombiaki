import { zombies } from "./handleZombies.js";

function endGame() {
  document.getElementById("popup").style.visibility = "visible";
  zombies = [];
}

export { endGame };
