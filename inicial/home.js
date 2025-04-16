let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function mostrarProximoSlide() {
  slides[currentSlide].classList.remove("ativo");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("ativo");
}

setInterval(mostrarProximoSlide, 3000);

// busca (mock)
document.getElementById("busca").addEventListener("input", function () {
  const termo = this.value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const nome = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = nome.includes(termo) ? "block" : "none";
  });
});
