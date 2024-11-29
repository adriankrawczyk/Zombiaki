import { animate } from "./animate.js";
import { initMouse } from "./mouse.js";
import { playMusic } from "./playMusic.js";
let canvas, ctx;
let width, height;
let musicPlayed = false;
function initCanvas() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false;
  document.getElementsByTagName("button")[0].addEventListener("click", () => {
    location.reload();
  });
  setCanvasDimensions();
  setBackground();
  initMouse();
  animate();
  canvas.addEventListener("click", () => {
    // if (!musicPlayed) playMusic();
    musicPlayed = true;
  });
}
function setBackground() {
  const background = new Image();
  background.src = "./images/board-bg.jpg";
  background.onload = () => {};
}
function setCanvasDimensions() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", (event) => {
  setCanvasDimensions();
});
export { initCanvas, canvas, ctx }; //
