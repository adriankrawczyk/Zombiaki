import { ctx } from "./canvas.js";
const textLength = 6;
let score = 0;
function drawScore() {
  const scoreInText = Math.abs(score).toString();
  let text = "";
  for (let i = 0; i < textLength - scoreInText.length; i++) text += "0";
  if (score < 0) text = "-" + text.slice(1);
  text += scoreInText;
  const x = window.innerWidth - 250;
  const y = 50;
  ctx.font = "64px arial";
  ctx.textBaseline = "top";
  ctx.strokeStyle = "black";
  ctx.lineWidth = 4;
  ctx.strokeText(text, x, y);
  ctx.fillStyle = "white";
  ctx.fillText(text, x, y);
}
function setScore(newScore) {
  score = newScore;
}
export { drawScore, score, setScore };
