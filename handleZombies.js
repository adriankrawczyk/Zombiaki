import { drawZombie, zombieWidth } from "./drawZombie.js";
import { getRandomInt } from "./getRandomInt.js";
import { getRandomFloat } from "./getRandomFloat.js";
import { health, setHealth } from "./health.js";
import { checkHitbox } from "./checkHitbox.js";
import { canvas } from "./canvas.js";

const minStartingX = 1300;
const maxStartingX = 2000;
const minStartingY = 0;
const maxStartingY = 300;
const minSpeed = 0.5;
const maxSpeed = 3;
const minScale = 0.2;
const maxScale = 2;
const speedMultiplier = 3;
const spawnZombieChange = 0.05;
const zombies = [];

let gameTime = 0;
let difficultyMultiplier = 1;

function spawnZombie() {
  const difficulty = Math.min(difficultyMultiplier, 3);

  zombies.push({
    x: getRandomInt(minStartingX, maxStartingX),
    y: getRandomInt(minStartingY, maxStartingY),
    speed:
      getRandomFloat(minSpeed * difficulty, maxSpeed * difficulty) *
      difficultyMultiplier,
    scale: Math.max(
      getRandomFloat(minScale, maxScale * 0.8) / difficultyMultiplier,
      0.2
    ),
    currentFrame: 0,
    timeSinceLastFrame: 0,
  });
}

spawnZombie();

function handleZombies() {
  gameTime += 1;
  difficultyMultiplier = 1 + gameTime / 1000;

  if (getRandomFloat(0, 1) < spawnZombieChange * difficultyMultiplier)
    spawnZombie();

  let zombieIndexToRemove = null;

  zombies.forEach((zombie, i) => {
    zombie.x -= zombie.speed * speedMultiplier;
    if (zombie.x < -zombieWidth / 2) {
      setHealth(health - 1);
      zombieIndexToRemove = i;
    }

    drawZombie(zombie);
  });

  if (zombieIndexToRemove !== null) {
    zombies.splice(zombieIndexToRemove, 1);
  }
}

export { handleZombies, zombies };
