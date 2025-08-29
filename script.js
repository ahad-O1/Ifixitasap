// header navbar

function toggleMenu() {
    const nav = document.getElementById("navigation");
    nav.classList.toggle("active");
}




let currentSlide = 0;

function moveSlide(direction) {
  const reviews = document.querySelector(".customer-reviews");
  const cards = document.querySelectorAll(".first-customer");
  const slideWidth = cards[0].offsetWidth + 25; // card width + gap
  const visibleCards = Math.floor(document.querySelector(".reviews-wrapper").offsetWidth / cards[0].offsetWidth);
  const maxSlide = cards.length - visibleCards;

  currentSlide += direction;

  // 🔄 Looping logic
  if (currentSlide < 0) {
    currentSlide = maxSlide;  // if at start and press left → jump to last
  } 
  else if (currentSlide > maxSlide) {
    currentSlide = 0;  // if at end and press right → jump back to first
  }

  reviews.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// initialize position
window.addEventListener("load", () => moveSlide(0));
window.addEventListener("resize", () => moveSlide(0));


