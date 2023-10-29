// Espera a que el documento esté listo
document.addEventListener("DOMContentLoaded", function () {
    // Obtiene los slides y el contenedor del carrusel
    const slides = document.querySelectorAll(".slide");
    const sliderContainer = document.querySelector(".slider-container");

    // Inicializa el índice del slide actual y el intervalo para el carrusel automático
    let currentSlide = 0;
    let interval;

    // Función para cambiar al siguiente slide
    function nextSlide() {
        slides[currentSlide].style.display = "none";
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.display = "block";
    }

    // Iniciar el carrusel automáticamente
    function startAutoSlide() {
        interval = setInterval(nextSlide, 3000); // Cambia de slide cada 3 segundos (3000 ms)
    }

    // Detener el carrusel automáticamente
    function stopAutoSlide() {
        clearInterval(interval);
    }

    // Iniciar el carrusel automáticamente al cargar la página
    startAutoSlide();

    // Detener el carrusel cuando el cursor pasa sobre el contenedor
    sliderContainer.addEventListener("mouseover", stopAutoSlide);

    // Reanudar el carrusel cuando el cursor sale del contenedor
    sliderContainer.addEventListener("mouseout", startAutoSlide);
});
