import { ctx } from "./canvas.js";

const textLength = 6;
let score = 0;

function updateResponsiveFont() {
  const fontSize = Math.max(0, window.innerWidth * 0.03);
  ctx.font = `${fontSize}px arial`;
}

function getResponsiveMargin() {
  return Math.max(50, window.innerWidth * 0.125);
}

function drawScore() {
  const scoreInText = Math.abs(score).toString();
  let text = "";
  for (let i = 0; i < textLength - scoreInText.length; i++) text += "0";
  if (score < 0) text = "-" + text.slice(1);
  text += scoreInText;

  const x = window.innerWidth - getResponsiveMargin();
  const y = getResponsiveMargin() / 5;

  updateResponsiveFont();

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

window.addEventListener("resize", drawScore);

export { drawScore, score, setScore };
