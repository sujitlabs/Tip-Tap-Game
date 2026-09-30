let score = 0;
let circle = document.getElementById("circle");
let scoreText = document.getElementById("score");

circle.addEventListener("click", () => {
  score++;
  scoreText.innerText = score;

  moveCircle();
});

function moveCircle() {
  let x = Math.random() * (window.innerWidth - 100);
  let y = Math.random() * (window.innerHeight - 100);

  circle.style.left = x + "px";
  circle.style.top = y + "px";
}