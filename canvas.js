import { animate } from "./animate.js";
import { initMouse } from "./mouse.js";
let canvas, ctx;
let width, height;
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
export { initCanvas, canvas, ctx };
