function playMusic() {
  var soundFile = document.createElement("audio");
  soundFile.preload = "auto";
  var src = document.createElement("source");
  src.src = "./images/sad-music.mp3";
  soundFile.appendChild(src);
  soundFile.load();
  soundFile.volume = 1;
  soundFile.play();
}

export { playMusic };
