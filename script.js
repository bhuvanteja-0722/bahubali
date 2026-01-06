// AUDIO START
const bgm = document.getElementById("bgm");
const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");

startBtn.addEventListener("click", () => {
  bgm.volume = 0.6;
  bgm.play();
  startScreen.style.display = "none";
});

// SCROLL REVEAL
window.addEventListener("scroll", () => {
  const img = document.querySelector(".legend-img");
  const pos = img.getBoundingClientRect().top;

  if (pos < window.innerHeight - 150) {
    img.style.opacity = "1";
    img.style.transform = "translateY(0)";
  }
});

// FIRE SPARKS
const canvas = document.getElementById("sparks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let sparks = [];
for (let i = 0; i < 120; i++) {
  sparks.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    v: Math.random() * 1 + 0.5
  });
}

function animateSparks() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "orange";

  sparks.forEach(s => {
    s.y -= s.v;
    if (s.y < 0) s.y = canvas.height;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(animateSparks);
}

animateSparks();
