import { zombieWidth, zombieHeight } from "./drawZombie.js";

function checkHitbox(zombie, pointX, pointY) {
  const hitboxMargin = 0;
  const scaledWidth = zombieWidth * zombie.scale;
  const scaledHeight = zombieHeight * zombie.scale;
  const hitboxX = zombie.x + scaledWidth * hitboxMargin;
  const hitboxY = zombie.y + scaledHeight * hitboxMargin;
  const hitboxWidth = scaledWidth * (1 - 2 * hitboxMargin);
  const hitboxHeight = scaledHeight * (1 - 2 * hitboxMargin);

  return (
    pointX >= hitboxX &&
    pointX <= hitboxX + hitboxWidth &&
    pointY >= hitboxY &&
    pointY <= hitboxY + hitboxHeight
  );
}

export { checkHitbox };
