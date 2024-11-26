import { canvas } from "./canvas.js";
import { checkHitbox } from "./checkHitbox.js";
import { score, setScore } from "./drawScore.js";
import { zombies } from "./handleZombies.js";

let mousePos;
function getMousePos(evt) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top,
  };
}

function initMouse() {
  window.addEventListener("mousemove", (evt) => {
    mousePos = getMousePos(evt);
  });

  canvas.addEventListener("click", () => {
    let hit = false;
    for (let i = zombies.length - 1; i >= 0; i--) {
      if (checkHitbox(zombies[i], mousePos.x, mousePos.y)) {
        zombies.splice(i, 1);
        hit = true;
        setScore(score + 20);
        break;
      }
    }
    if (!hit) {
      setScore(score - 5);
    }
  });
}
export { mousePos, initMouse };
