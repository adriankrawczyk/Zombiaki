import { endGame } from "./endGame.js";

const maxHealth = 3;
let health = maxHealth;
function setHealth(newHealth) {
  health = newHealth;
  if (health <= 0) endGame();
}
export { maxHealth, health, setHealth };
