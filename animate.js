import { ctx } from "./canvas.js";
import { drawCursor } from "./drawCursor.js";
import { drawHearts } from "./drawHearts.js";
import { drawScore, score } from "./drawScore.js";
import { drawZombie } from "./drawZombie.js";
import { handleZombies } from "./handleZombies.js";

const fps = 30;
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleZombies();
  drawHearts();
  drawScore();
  drawCursor();
  document.getElementById(
    "popup"
  ).innerHTML = `Score ${score} <br>      Restart?`;
  setTimeout(() => {
    requestAnimationFrame(animate);
  }, 1000 / fps);
}
export { animate };
