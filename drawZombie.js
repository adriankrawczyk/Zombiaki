import { createImage } from "./createImage.js";
import { drawImage } from "./drawImage.js";
import { ctx } from "./canvas.js";
const zombieWidth = 200;
const zombieHeight = 320;
const totalFrames = 10;
const zombieImg = createImage(
  "./images/walkingdead.png",
  zombieWidth,
  zombieHeight
);
function drawZombie(zombie) {
  zombie.timeSinceLastFrame += zombie.speed;
  if (zombie.timeSinceLastFrame > 1) {
    zombie.currentFrame = (zombie.currentFrame + 1) % totalFrames;
    zombie.timeSinceLastFrame = 0;
  }
  const frameX = zombie.currentFrame * zombieWidth;
  ctx.drawImage(
    zombieImg,
    frameX,
    0,
    zombieWidth,
    zombieHeight,
    zombie.x,
    zombie.y,
    zombieWidth * zombie.scale,
    zombieHeight * zombie.scale
  );
}
export { drawZombie, zombieWidth, zombieHeight };
