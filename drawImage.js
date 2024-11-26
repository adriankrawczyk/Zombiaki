import { ctx } from "./canvas.js";

function drawImage(image, x, y) {
  ctx.drawImage(
    image,
    x - image.width / 2,
    y - image.height / 2,
    image.width,
    image.height
  );
}

export { drawImage };
