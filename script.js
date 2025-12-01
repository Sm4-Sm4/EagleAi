// ==============================
// Slider avis
// ==============================
const track = document.getElementById("review-track");
let position = 0;

function loop() {
  position -= 0.15;
  track.style.transform = `translateX(${position}px)`;
  if (Math.abs(position) >= track.scrollWidth / 2) position = 0;
  requestAnimationFrame(loop);
}
loop();

// ==============================
// Typewriter header
// ==============================
const words = ["les hackers","des Curieux", "des Cybercriminels"];
let index = 0, charIndex = 0, deleting = false;
const wordElement = document.getElementById("dynamic-word");

function typeEffect() {
  const currentWord = words[index];
  if (!deleting) {
    charIndex++;
    wordElement.innerHTML = currentWord.substring(0, charIndex) + '<span class="cursor blink">_</span>';
    if (charIndex === currentWord.length) setTimeout(() => deleting = true, 1500);
  } else {
    charIndex--;
    wordElement.innerHTML = currentWord.substring(0, charIndex) + '<span class="cursor blink">_</span>';
    if (charIndex === 0) { deleting = false; index = (index + 1) % words.length; }
  }
  setTimeout(typeEffect, deleting ? 120 : 150);
}
typeEffect();