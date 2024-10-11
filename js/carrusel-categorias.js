document.addEventListener("DOMContentLoaded", function() {
    const carousels = document.querySelectorAll('.carousel-categorias-a');

    carousels.forEach(carousel => {
        const items = carousel.querySelectorAll('.categorias-lista li');
        const dotsContainer = carousel.nextElementSibling; // Selecciona el contenedor de dots que está justo después del carousel
        const itemsPerPage = 4;
        const totalPages = Math.ceil(items.length / itemsPerPage);
        let currentPage = 0;

        // Crear los dots dinámicamente
        for (let i = 0; i < totalPages; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.dataset.page = i;  // Agrega un atributo de datos para identificar la página
            if (i === 0) dot.classList.add('active');
            dotsContainer.appendChild(dot);
        }

        // Obtener los dots después de agregarlos al DOM
        const dots = dotsContainer.querySelectorAll('.dot');

        function showPage(page) {
            items.forEach((item, index) => {
                item.style.display = 'none'; // Oculta todos los elementos
                if (index >= page * itemsPerPage && index < (page + 1) * itemsPerPage) {
                    item.style.display = 'list-item'; // Muestra los elementos de la página actual
                }
            });
            dots.forEach(dot => dot.classList.remove('active'));
            dots[page].classList.add('active');
        }

        // Añadir eventos a los dots
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                currentPage = parseInt(dot.dataset.page);  // Obtener la página desde el atributo de datos
                showPage(currentPage);
            });
        });

        showPage(currentPage);
    });
});

//PARA QUITAR EL EFECTO DE SOMBRA DENTRO DE CADA CUADRO DE CATEGORIA
const contenedorCategoria = document.getElementById('contenedor_info');

contenedorCategoria.addEventListener('mouseenter', function() {
    contenedorCategoria.classList.remove('hvr-float-shadow');
});

contenedorCategoria.addEventListener('mouseleave', function() {
    contenedorCategoria.classList.add('hvr-float-shadow');
});
