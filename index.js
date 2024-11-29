import { initCanvas } from "./canvas.js";
import { playMusic } from "./playMusic.js";

async function run() {
  window.addEventListener("DOMContentLoaded", async () => {
    initCanvas();
  });
}

run();
