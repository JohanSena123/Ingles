const slides = document.querySelector(".slides");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentIndex = 0;

// Función para mostrar el slide actual
function showSlide(index) {
  const slideWidth = slides.querySelector(".slide").offsetWidth;
  slides.style.transform = `translateX(-${index * slideWidth}px)`;
}

// Evento para botón "Previo"
prev.addEventListener("click", () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.children.length - 1;
  showSlide(currentIndex);
});

// Evento para botón "Siguiente"
next.addEventListener("click", () => {
  currentIndex = (currentIndex < slides.children.length - 1) ? currentIndex + 1 : 0;
  showSlide(currentIndex);
});

// Mostrar el primer slide al cargar la página
showSlide(currentIndex);
