import { health, maxHealth } from "./health.js";
import { drawImage } from "./drawImage.js";
import { createImage } from "./createImage.js";
const heartDimension = 100;
const wholeMargin = 75;
const betweenMargin = 25;
const fullHeart = createImage(
  "./images/full_heart.png",
  heartDimension,
  heartDimension
);
const emptyHeart = createImage(
  "./images/empty_heart.png",
  heartDimension,
  heartDimension
);
function drawHearts() {
  for (let i = 0; i < maxHealth; i++) {
    drawImage(
      i < health ? fullHeart : emptyHeart,
      (heartDimension + betweenMargin) * i + wholeMargin,
      wholeMargin
    );
  }
}
export { drawHearts };
