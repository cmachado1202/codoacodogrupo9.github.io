fetch('https://api.ejemplo.com/data')
    .then(response => response.json())
    .then(data => {
        // Haz algo con los datos de la API
    })
    .catch(error => {
        console.error('Error al obtener datos de la API:', error);
    });
const slides = document.querySelectorAll('.slide');
const menuItems = document.querySelectorAll('.menu li a');

menuItems.forEach((menuItem, index) => {
    menuItem.addEventListener('click', () => {
        slides.forEach(slide => (slide.style.display = 'none'));
        slides[index].style.display = 'block';
    });
})