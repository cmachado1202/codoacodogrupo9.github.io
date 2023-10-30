//carousel

const slides = document.querySelectorAll('.slide');
const menuItems = document.querySelectorAll('.menu li a');
let currentSlideIndex = 0;

function showSlide(index) {
    slides.forEach(slide => (slide.style.display = 'none'));
    slides[index].style.display = 'block';
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

// Cambiar automáticamente a la siguiente diapositiva cada 5 segundos (ajusta el tiempo según tus necesidades)
setInterval(nextSlide, 3000);

menuItems.forEach((menuItem, index) => {
    menuItem.addEventListener('click', () => {
        showSlide(index);
        currentSlideIndex = index;
    });
});

showSlide(currentSlideIndex); // Mostrar la primera diapositiva al cargar la página


 // Funcion demostrar funcionamiento de api
  
 function fetchAndUpdateUser(userBoxId) {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            // Extract the user data
            const user = data.results[0];

            // Update the HTML elements in the specified user box
            const userBox = document.getElementById(userBoxId);
            userBox.querySelector('.titulo-centro').textContent = `${user.name.first} ${user.name.last}`;
            userBox.querySelector('img').src = user.picture.large;
        })
        .catch(error => console.error('Error fetching data: ' + error));
}

// Loop

for (let i = 1; i <= 3; i++) {
    fetchAndUpdateUser(`user-box-${i}`);
}