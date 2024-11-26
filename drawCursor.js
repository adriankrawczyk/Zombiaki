import { ctx, canvas } from "./canvas.js";
import { createImage } from "./createImage.js";
import { drawImage } from "./drawImage.js";
import { mousePos } from "./mouse.js";
const aim = createImage("./images/aim.png", 128, 128);
function drawCursor() {
  if (!mousePos) return;
  drawImage(aim, mousePos.x, mousePos.y);
}
export { drawCursor };
