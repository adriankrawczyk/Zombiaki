import { health, maxHealth } from "./health.js";
import { drawImage } from "./drawImage.js";
import { createImage } from "./createImage.js";

let heartDimension = 100;
let wholeMargin = 75;
let betweenMargin = 25;

function updateResponsiveValues() {
  const windowWidth = window.innerWidth;
  heartDimension = Math.max(50, windowWidth * 0.075);
  wholeMargin = Math.max(20, windowWidth * 0.05);
  betweenMargin = Math.max(10, windowWidth * 0.01);
}

let fullHeart = createImage(
  "./images/full_heart.png",
  heartDimension,
  heartDimension
);
let emptyHeart = createImage(
  "./images/empty_heart.png",
  heartDimension,
  heartDimension
);

function updateHeartImages() {
  fullHeart = createImage(
    "./images/full_heart.png",
    heartDimension,
    heartDimension
  );
  emptyHeart = createImage(
    "./images/empty_heart.png",
    heartDimension,
    heartDimension
  );
}

function drawHearts() {
  updateResponsiveValues();
  updateHeartImages();
  for (let i = 0; i < maxHealth; i++) {
    drawImage(
      i < health ? fullHeart : emptyHeart,
      (heartDimension + betweenMargin) * i + wholeMargin,
      wholeMargin
    );
  }
}

window.addEventListener("resize", drawHearts);

export { drawHearts };
