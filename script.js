// Typing effect
const text = ["a Frontend Developer", "a UI Designer", "a Freelancer"];
let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
  const typingText = document.getElementById("typing-text");
  if (i < text.length) {
    if (!isDeleting && j <= text[i].length) {
      current = text[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      current = text[i].substring(0, j--);
    }

    typingText.innerHTML = current;

    if (j === text[i].length) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else if (j === 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
  }
}
type();

// Contact form alert
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thanks! I will get back to you soon.");
  this.reset();
});
